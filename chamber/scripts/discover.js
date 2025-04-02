const url = "https://sunight00.github.io/wdd231/chamber/data/discover.json"

const ur = "https://sunight00.github.io/wdd231/chamber/data/members.json"

async function  images() {
    let response = await fetch(url);
    let data = await response.json();
    
    //displayMembers(data.companies);   
    
    //displaycard(data.companies);
    console.log(data.images)
  
}
images();