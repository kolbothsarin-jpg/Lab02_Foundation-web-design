function challenge1(width, height) {
    if (width > 0 && height>0 ){
        for (let i = 0; i < height; i++) {
            let line = "";
            for (let j = 0; j < width; j++) {
                line += "*";
            }
            console.log(line);
        }
    }
}
challenge1(3, 4);
challenge1(5, 2);
challenge1(5, -2);