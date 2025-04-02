const url = "https://github.com/Sunight00/wdd231/blob/main/chamber/data/discover.json"

async function name() {
    const data = await fetch(url)
    console.log(data.images)
}

name()