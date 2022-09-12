
  import { useEffect } from 'react';
  import axios from 'axios';
  import Link from 'next/link';
  import Header from "../Header/index";
  import Footer from "../Footer/index";
  
  export default function Page2() {
  
    useEffect(() => {
      getData();
    }, [])
   
    async function getData() {
      
      axios.get("https://nqhkpgaezalnpxtizxzv.supabase.co/storage/v1/object/public/projects/28e0ce8e-08b5-4aba-9c4f-1960dd3cc160/testname/Page2/index.html").then(res=>{
        console.log("res=> ",res);
        document.getElementById("Page2ID").innerHTML = res.data;
        
        //* css
        axios.get("https://nqhkpgaezalnpxtizxzv.supabase.co/storage/v1/object/public/projects/28e0ce8e-08b5-4aba-9c4f-1960dd3cc160/testname/Page2/style.css").then(CssRes=>{
          console.log("CssRes", CssRes);
          let createCssElement = document.createElement("style");
          // createCssElement.nodeValue = CssRes.data;
          createCssElement.appendChild(document.createTextNode(CssRes.data));
          
          document.getElementById("Page2ID").appendChild(createCssElement)
          axios.get("https://nqhkpgaezalnpxtizxzv.supabase.co/storage/v1/object/public/projects/28e0ce8e-08b5-4aba-9c4f-1960dd3cc160/testname/Page2/script.js").then(JsRes=>{
            console.log("JsRes", JsRes);
            eval(JsRes.data)
          })
        })
      })
  
    }
    
  
    return (
      <div>
        <>
          <Header />
        </>
        
        <div id='Page2ID'></div>

        <>
          <Footer />
        </>
      </div>
    )
  }