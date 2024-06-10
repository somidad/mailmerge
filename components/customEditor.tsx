import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "ckeditor5-custom-build";

type Props = {
  data: string;
  onChange: (data: string) => void;
};

export default function CustomEditor({ data, onChange }: Props) {
  return (
    <div className="prose max-w-full">
      <CKEditor
        editor={Editor}
        data={data}
        onChange={(event, editor) => {
          const data = editor.getData();
          onChange(data);
        }}
      />
    </div>
  );
}
