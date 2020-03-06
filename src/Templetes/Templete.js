import React, {Component} from 'react';
import ReactDOM from 'react-dom';           
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import $ from 'jquery';
import '../Templetes/templete.scss'; 
var i = 0;


export default class Templete extends React.Component{
        
    makeditable = () => {
        i++;
        var a = 'editable'+i;
        var b = 'forminput'+i;
        var c = 'div'+i;
        var selection= window.getSelection().getRangeAt(0);
        var selectedText = selection.extractContents();
        var span= document.createElement("span");
        var s = document.createElement('div');
        var q = document.createElement('input');
        span.setAttribute("contenteditable", true);
        span.setAttribute("id", a);
        s.setAttribute("id", c);
        q.setAttribute("id", b);
        span.appendChild(selectedText);
        selection.insertNode(span);
        $('#form').append(s);
        $('#' + c).append(q);
        console.log(b);


    };
    testok=()=>{
        for (let x=1; x<=i; x++){
            var a = 'editable'+x;
            var b = 'forminput'+x; 
            var df = $('#' + b).val();
            var fd = $('#' + a);
            fd.replaceWith(df);
            console.log(df);
            

        }

    }
    append = () => { 
        var x = $('.append-remove');
        $('.append').empty();
        $('p').clone().appendTo(".append");
        $(x).toggle();
        $('.append').toggle();

    }

    render(){
        return(
            <div className="center">
                <div className="maketemplete">
                    <input type="button" onClick={() => this.makeditable()} value="Make Editable" />


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
                <div id="form">

                </div>
                <input className="button" type="button" value="Done/Edit" onClick={() => this.append()} />

                <button onClick={()=> this.testok()} >ok</button> 
             
                
            </div>
           
        );

        
    }
    
    
}
// class ChildClass extends React.Component {
//     render() {
//         return (
//             <div><h3>The child class.</h3></div>
//         );
//     }
// }
