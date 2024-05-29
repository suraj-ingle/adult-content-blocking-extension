
chrome.runtime.onMessage.addListener(function(request, sendResponse) {
  if (request.message === "checkForAdult") {
    console.log("checkForAdult");
    const innerText = document.body.innerText.toLowerCase();
    const keywords = [
      "anime",
      "hentai",
      "shota",
      "nsfw",
      "Aunty",
      "incest",
      "aniwave",
      "vlxx",
      "phim",
      "KHÔNG CHE", 
      "javhd",
      "xvid",
      "xxx",
      "hardxxx",
      "hottie",
      "cock",
      "dick",
      "shemale",
      "lesbian",
      "adult",
      "cunnilingus",
      "fellatio",
      "blowjob",
      "rimjob",
      "rimming",
      "blond",
      "brunette",
      "brunet",
      "mallu",
      "boob",
      "manga",
      "manhwa",
      "comic",
      "errot",
      "erotic",
      "sexy",
      "tvshows88",
      "suck",
      "nude",
      "penis",
      "pussy",
      "chick",
      "sxxx",
      "vlxxx",
      "porn",
      "Hindi Suvichar",
      "Moral Story",
      "Emotional Story",
      "audio sex",
      "audio story",
      "hindi story",
      "hindi sex",
      "hindi love story",
      "marathi story",
      "sex story",
      "motivational story",
      "emotional story",
      "moral story",
      "sexy story",
      "literrotica",
      "dirtyconfessions",
      "audiosexstories",
      "xhamster46",
      "xhamster48",
      "xhamster19",
      "xhamster3",
      "xhamster",
      "xhamster2",
      "xhamsterlive",
      "xhamster16",
      "xhamster",
      "xham",
      "vlxx",
      "vlxx",
      "vlxxx",
      "vlxx",
      "javhdporno",
      "javhdporn",
      "javhd",
      "javhd",
      "javhd",
      "javhd",
      "javhdvn",
      "javhdhay",
      "myxvid",
      "onlyhardxxx",
      "fightthenewdrug",
      "hardxxxpics",
      "hardxxxmovies",
      "indianpornvideos",
      "indianporngirl",
      "indiansexstories2",
      "xcafe",
      "xcafe",
    ];

    let adultContent = "" 
    const containsAdult = keywords.some(keyword => {
      if(innerText.includes(keyword.toLowerCase())){
        adultContent = keyword.toLowerCase()
        return innerText.includes(keyword.toLowerCase())
      }
    });
    const isAboutNoFap = ["no fap", "nofap", "quit masturbation"].some(keyword => {
      if(innerText.includes(keyword.toLowerCase())){
        return innerText.includes(keyword.toLowerCase())
      }
    });

    console.log("containsAdult:", {containsAdult, isAboutNoFap, adultContent});
    if (containsAdult && !isAboutNoFap) {
      chrome.runtime.sendMessage({ message: "adultContentFound", adultContent });
    }
    sendResponse(containsAdult);
  }
});