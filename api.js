const getRandomBingWallpaper = () => {
  const bingWallpaperUrl =
    "https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1";
  return new Promise((resolve, reject) => {
    fetch(bingWallpaperUrl)
      .then((res) => res.json())
      .then((data) => {
        const { images } = data;
        const { urlbase, copyright } = images[0];
        const wallpaperUrl = `https://cn.bing.com${urlbase}_1920x1080.jpg`;
        resolve({ wallpaperUrl, copyright });
      })
      .catch((err) => {
        reject(err);
      });
  });
};
