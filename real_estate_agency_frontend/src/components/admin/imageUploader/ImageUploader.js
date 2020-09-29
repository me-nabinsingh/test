import React, { Component } from 'react';
import { FilePond, File, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import config from '../../../config';

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

export default class  ImageUploader extends Component {
    state = {
        files: []
    }

    render() {
        
        return (
            <FilePond ref={ref => this.pond = ref}
                    allowMultiple={true} 
                    server= {`${config.apiUrl}/images`}
                    onload = {(response) => {
                        console.log(response);
                    }}
                    onupdatefiles={(fileItems) => {
                        // Set current file objects to this.state
                        this.setState({
                            files: fileItems.map(fileItem => {
                                return fileItem.file;
                            })
                        });
                    }}>
            
                {this.state.files.map(file => (
                    <File key={file} src={file} origin="local" />
                ))}
                
            </FilePond>
        );
    }
}
 
