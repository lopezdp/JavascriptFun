// Crop Function
function crop(img, w, h)
{
    print(img);
    print("Width: ", img.getWidth());
    print("Height: ", img.getHeight());
    
    if(w < img.getWidth() || h < img.getHeight())
    {
        for (var p of img.values())
        {
            if(p.getX() > w || p.getY() > h)
            {
                p.setRed(255);
                p.setGreen(255);
                p.setBlue(255);
            }
        }
    }
    
    return img;
}

var img = new SimpleImage('astrachan.jpg');
img = crop(img,200,300);
print(img);

print("Width: ", 200);
print("Height: ", 300);

