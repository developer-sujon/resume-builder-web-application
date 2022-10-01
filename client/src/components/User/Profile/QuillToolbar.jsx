import React from "react";
import ReactQuill from "react-quill";

class QuillToolbar extends React.Component {
  constructor(props) {
    console.log(props.values);
    super(props);
    this.state = { editorHtml: "props.values.o", theme: "snow" };
  }

  handleChange = (html) => {
    // this.props.setFieldValue("CarrierObjective", html);
    this.setState({ editorHtml: html });
  };

  render() {
    return (
      <ReactQuill
        onChange={(html) => this.handleChange(html)}
        theme={this.state.theme}
        value={this.state.editorHtml}
        modules={QuillToolbar.modules}
        formats={QuillToolbar.formats}
        bounds={".app"}
      />
    );
  }
}

QuillToolbar.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

QuillToolbar.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "scr",
];

export default QuillToolbar;
