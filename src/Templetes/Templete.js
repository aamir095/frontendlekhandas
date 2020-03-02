import React, {Component} from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import $ from 'jquery'; 


export default class Templete extends React.Component{
        
    makeditable = () => {
        var selection= window.getSelection().getRangeAt(0);
        var selectedText = selection.extractContents();
        var span= document.createElement("span");
        span.setAttribute("contenteditable", true);
        span.setAttribute("id", "span");
        span.appendChild(selectedText);
        selection.insertNode(span);
    };
    append = () => { 
        var x = $('.append-remove');
        

        $('.append').empty();
        $('p').clone().appendTo(".append");
        $(x).toggle();

    }

    render(){
        return(
            <div>
                    <input type="button" onClick={() => this.makeditable()} value="Make Editable" />
                <input className="button" type="button" value="Done/Edit" onClick={() => this.append()} />


                    <div classname="editor">
                        <div className="append-remove">
                    

                <CKEditor
                    editor={ ClassicEditor }
                    onInit={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
                </div>
                </div>
                <div className="append"></div>
                
                
 
            </div>
           
        );
    }
}
