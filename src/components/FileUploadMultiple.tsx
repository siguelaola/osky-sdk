import React from "react";
import { ChangeEvent } from "react";
import "./css/FileUploadComponent.css";

class FileUploadMultiple extends React.Component<
  {},
  { files: FileList | null }
> {
  //   const [fileList, setFileList] = useState<FileList | null>(null);

  state = {
    files: null,
  };

  handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    // setFileList(e.target.files);
    if (e.target.files !== null) {
      this.setState({ files: e.target.files });
    }
  };

  //   const handleUploadClick = () => {
  //     if (!fileList) {
  //       return;
  //     }

  //     // 👇 Create new FormData object and append files
  //     const data = new FormData();
  //     files.forEach((file, i) => {
  //       data.append(`file-${i}`, file, file.name);
  //     });

  //     // 👇 Uploading the files using the fetch API to the server
  //     fetch('https://httpbin.org/post', {
  //       method: 'POST',
  //       body: data,
  //     })
  //       .then((res) => res.json())
  //       .then((data) => console.log(data))
  //       .catch((err) => console.error(err));
  //   };

  // 👇 files is not an array, but it's iterable, spread to get an array of files
  render() {
    const filesArray = this.state.files ? [...this.state.files] : [];

    return (
      <div>
        <input type="file" onChange={this.handleFileChange} multiple />
        {/* <ul>
          {filesArray.map((file: File, i) => (
            <li key={i}>
              {file.name}
            </li>
          ))}
        </ul> */}

        {/* <button onClick={handleUploadClick}>Upload</button> */}
      </div>
    );
  }
}

export default FileUploadMultiple;
