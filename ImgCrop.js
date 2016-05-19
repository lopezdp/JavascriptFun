					// Crop Function
					function crop(img, w, h)
					{
					    print(img);
					    
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
