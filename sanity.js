// sanity/Clients install

import { createClient } from "@sanity/client"



const client =createClient({
projectId:'sa2otm4y',
dataset:'production',
apiVersion:'2023-07-27'
,useCdn:true
});
export const fetchDrinks = async ()=>{
    let data=await client.fetch(
`
* [_type == 'coffee' ]{
    _id,
      title,
      description,
      mainImage{
        asset ->{
        url
        }
      },
      
    price,
      size [] ->{
        title
      }
      
  }
`,

    ).then((drinks) => {return drinks});
    return data;
}

export const fetchTea=async()=>{
  let tea=await client.fetch(`
  * [_type == 'tea'] {
  _id,
    title,
    description,
    mainImage{
      asset->{
      url
      }
    },
    
  price,
    size [] ->{
      title
    }
    
}
  `).then(res =>
   {
    return res
   }
    );
    return tea;
}