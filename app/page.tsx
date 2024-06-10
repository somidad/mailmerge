"use client";

import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { saveAs } from "file-saver";
import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import dot from "dot";

const CustomEditor = dynamic(
  () => {
    return import("@/components/customEditor");
  },
  { ssr: false }
);

export default function Writer() {
  const refFile = useRef<HTMLInputElement>(null);
  const [content, setContent] = useState("");
  const refData = useRef<HTMLInputElement>(null);
  const [data, setData] = useState("");

  function onOpen(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          setContent(e.target.result as string);
        }
      };
      reader.readAsText(file);
      if (refFile.current) {
        refFile.current.value = "";
      }
    }
  }

  function save() {
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    saveAs(blob);
  }

  function onLoad(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          setData(e.target.result as string);
        }
      };
      reader.readAsText(file);
      if (refData.current) {
        refData.current.value = "";
      }
    }
  }

  function publish() {
    const template = dot.template(content);
    const dataList = JSON.parse(data);
    const renderedList: Array<{ keys: string[]; rendered: string }> = [];
    dataList.forEach((data: any) => {
      const rendered = template(data);
      const duplicate = renderedList.find((r) => r.rendered === rendered);
      if (!duplicate) {
        renderedList.push({ keys: [data.key], rendered });
      } else {
        duplicate.keys.push(data.key);
      }
    });
    renderedList.forEach(({ keys, rendered }) => {
      const blob = new Blob([rendered], { type: "text/html;charset=utf-8" });
      saveAs(blob, `${keys.join(", ")}.html`);
    });
  }

  return (
    <div>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger onClick={() => setContent("")}>New</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger onClick={() => refFile.current?.click()}>
            Open
          </MenubarTrigger>
          <input type="file" ref={refFile} hidden onChange={onOpen} />
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger onClick={save}>Save</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger onClick={() => refData.current?.click()}>
            Load data
          </MenubarTrigger>
          <input type="file" ref={refData} hidden onChange={onLoad} />
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger onClick={publish}>Publish</MenubarTrigger>
        </MenubarMenu>
      </Menubar>
      <CustomEditor data={content} onChange={setContent} />
    </div>
  );
}
