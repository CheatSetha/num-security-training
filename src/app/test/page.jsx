"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

const FormAddNew = () => {
  const [editorData, setEditorData] = useState(""); // Initialize editorData as an empty string
  const [editorLoaded, setEditorLoaded] = useState(false);
  const editorRef = useRef();
  const { CKEditor, DecoupledEditor } = editorRef.current || {};

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, // v3+
      DecoupledEditor: require("@ckeditor/ckeditor5-build-decoupled-document"),
    };
    setEditorLoaded(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
    
      alert(JSON.stringify(editorData));
      // Handle success response
    } catch (error) {
      console.error("Error submitting content:", error);
      // Handle error
    }
  };

  return (
    <>
      {editorLoaded ? (
        <form onSubmit={handleSubmit}>
          <CKEditor
            data={editorData}
            editor={DecoupledEditor}
            config={{
              mediaEmbed: { previewsInData: true },
              ckfinder: {
                uploadUrl: "http://localhost:3030/api/v1/uploads/single",
              },
              placeholder: "Write your tutorial content here!",
              autoGrow_onStartup: true,
              autoGrow_minHeight: 200,
              autoGrow_maxHeight: 600,
            }}
            onReady={(editor) => {
              editor.ui
                .getEditableElement()
                .parentElement.insertBefore(
                  editor.ui.view.toolbar.element,
                  editor.ui.getEditableElement()
                );
              editor.plugins.get("FileRepository").createUploadAdapter = (
                loader
              ) => {
                return new MyUploadAdapter(loader);
              };
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log(data, "data editor");
              setEditorData(data.replace(/"/g, "'"));
            }}
          />
          <button type="submit" className="mt-4 btn">
            Submit
          </button>
        </form>
      ) : (
        <div>Editor loading</div>
      )}
    </>
  );
};

class MyUploadAdapter {
  constructor(loader) {
    this.loader = loader;
  }

  upload() {
    return this.loader.file.then(
      (file) =>
        new Promise((resolve, reject) => {
          const formData = new FormData();
          formData.append("file", file);
          console.log(formData, "form data upload image")
          fetch("http://localhost:3030/api/v1/uploads/single", {
            method: "POST",
            body: formData,
          })
            .then((response) => {
              console.log(response)
              if (response.ok) {
                response.json().then((data) => {
                  console.log(data, "data upload image");
                  console.log(data?.url, "url image")
                  // const url = data?.data?.url;

                  resolve({ default: data?.data?.path });
                });
              } else {
                reject(response.statusText);
              }
              // console.log(response, "response upload image");
            })
            .catch((error) => {
              reject(error);
              console.log(error, "error upload image");
            });
        })
    );
  }

  abort() {
    // Abort upload logic here
  }
}


export default FormAddNew;
