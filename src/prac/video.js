import React from 'react'
import axios, { post } from 'axios';

class VideoPlayer extends React.Component {
  constructor(props) 
  {
    super(props);
    this.state ={file:null}    
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
  }

  onFormSubmit(e){
    this.fileUpload(this.state.file).then((response)=>{console.log(response.data);})
                 }
 
  onChange(e) {
    this.setState({file:e.target.files[0]})
              }

  fileUpload(file){
    const url = "./public/videos";
    const formData = new FormData();
    formData.append('file',file)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
                  }
                    }
    return  post(url, formData,config)
  }
  
render() {
    return (
    <div>
        <form onSubmit={this.onFormSubmit}>
        <h1>File Upload</h1>
        <input type="file" id = "5" onChange={this.onChange} />
        <button type="submit" onClick={this.copy}>Upload </button>
        </form>
        <div className="App">
        <video width="750" height="500" controls >
        <source src={this.setState({file:e.target.files[0]})} />
        </video>
        </div>
    </div>    
   )
  }
}
export default VideoPlayer;
