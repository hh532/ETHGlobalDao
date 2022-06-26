# https://cloford.com/resources/colours/websafe3.htm

colours = [
    "#993366",
    "#CC6699",
    "#FF99CC",
    "#FF0099",
    "#990066",
    "#CC3399",
    "#FF66CC",
    "#CC0099",
    "#FF33CC",
    "#FF00CC",
    "#FF00FF",
    "#CC00CC",
    "#FF33FF",
    "#990099",
    "#CC33CC",
    "#FF66FF",
    "#660066",
    "#993399",
    "#CC66CC",
    "#FF99FF",
    "#330033",
    "#663366",
    "#996699",
    "#CC99CC",
    "#FFCCFF",
    "#CC00FF",
    "#9900CC",
    "#CC33FF",
    "#660099",
    "#9933CC",
    "#CC66FF",
    "#9900FF",
    "#330066",
    "#663399",
    "#9966CC",
    "#CC99FF",
    "#6600CC",
    "#9933FF",
    "#6600FF",
    "#330099",
    "#6633CC",
    "#9966FF",
    "#3300CC",
    "#6633FF",
    "#3300FF",
    "#0000FF",
    "#0000CC",
    "#000099",
    "#000066",
    "#000033",
    "#3333FF",
    "#3333CC",
    "#333399",
    "#333366",
    "#6666FF",
    "#6666CC",
    "#666699",
    "#9999FF",
    "#9999CC",
    "#CCCCFF",
    "#0033FF",
    "#0033CC",
    "#3366FF",
    "#003399",
    "#3366CC",
    "#6699FF",
    "#0066FF",
    "#0066CC",
    "#3399FF",
    "#003366",
    "#336699",
    "#6699CC",
    "#99CCFF",
    "#0099FF",
    "#006699",
    "#3399CC",
    "#66CCFF",
    "#0099CC",
    "#33CCFF",
    "#00CCFF",
    "#00FFFF",
    "#00CCCC",
    "#009999",
    "#006666",
    "#003333",
    "#33FFFF",
    "#33CCCC",
    "#339999",
    "#336666",
    "#66FFFF",
    "#66CCCC",
    "#669999",
    "#99FFFF",
    "#99CCCC",
    "#CCFFFF",
    "#00FFCC",
    "#00CC99",
    "#33FFCC",
    "#009966",
    "#33CC99",
    "#66FFCC",
    "#00FF99",
    "#006633",
    "#339966",
    "#66CC99",
    "#99FFCC",
    "#00CC66",
    "#33FF99",
    "#00FF66",
    "#009933",
    "#33CC66",
    "#66FF99",
    "#00CC33",
    "#33FF66",
    "#00FF33",
    "#00FF00",
    "#00CC00",
    "#009900",
    "#006600",
    "#003300",
    "#33FF33",
    "#33CC33",
    "#339933",
    "#336633",
    "#66FF66",
    "#66CC66",
    "#669966",
    "#99FF99",
    "#99CC99",
    "#CCFFCC",
    "#33FF00",
    "#33CC00",
    "#66FF33",
    "#339900",
    "#66CC33",
    "#99FF66",
    "#66FF00",
    "#66CC00",
    "#99FF33",
    "#336600",
    "#669933",
    "#99CC66",
    "#CCFF99",
    "#99FF00",
    "#669900",
    "#99CC33",
    "#CCFF66",
    "#99CC00",
    "#CCFF33",
    "#CCFF00",
    "#FFFF00",
    "#CCCC00",
    "#999900",
    "#666600",
    "#333300",
    "#FFFF33",
    "#CCCC33",
    "#999933",
    "#666633",
    "#FFFF66",
    "#CCCC66",
    "#999966",
    "#FFFF99",
    "#CCCC99",
    "#FFFFCC",
    "#FFCC00",
    "#CC9900",
    "#FFCC33",
    "#996600",
    "#CC9933",
    "#FFCC66",
    "#FF9900",
    "#663300",
    "#996633",
    "#CC9966",
    "#FFCC99",
    "#CC6600",
    "#FF9933",
    "#FF6600",
    "#993300",
    "#CC6633",
    "#FF9966",
    "#CC3300",
    "#FF6633",
    "#FF3300",
    "#FF0000",
    "#CC0000",
    "#990000",
    "#660000",
    "#330000",
    "#FF3333",
    "#CC3333",
    "#993333",
    "#663333",
    "#FF6666",
    "#CC6666",
    "#996666",
    "#FF9999",
    "#CC9999",
    "#FFCCCC",
    "#FF0033",
    "#CC0033",
    "#FF3366",
    "#990033",
    "#CC3366",
    "#FF6699",
    "#FF0066",
    "#CC0066",
    "#FF3399",
    "#660033",
]




import codecs
import cairosvg
import os

content = None
with codecs.open('Ethereum-icon-purple.svg', encoding='utf-8', errors='ignore') as f:
        content = f.read()

lightColour = "#8A92B2"
mediumColour = "#62688F"
darkColour = "#454A75"

os.mkdir("nfts/0")
os.mkdir("nfts/1")
os.mkdir("nfts/2")
os.mkdir("nfts/3")

fileIndex = 0

for i in range(0, len(colours), 3): #210 colours
    fileIndex += 1

    newLightColour = colours[i]
    newMediumColour = colours[i + 1]
    newDarkColour = colours[i + 2]

    new_SVG_A = content.replace(lightColour, newLightColour)
    new_SVG_B = new_SVG_A.replace(mediumColour, newMediumColour)
    new_SVG_C = new_SVG_B.replace(darkColour, newDarkColour)

    with open( 'nfts/0/' + str(fileIndex) + '.svg', 'wb') as fout:
        cairosvg.svg2svg(bytestring=new_SVG_C, write_to=fout)


# for i in range(1, len(colours) - 2, 3): #210 colours  PRODUCES 70 IMAGES
#     fileIndex += 1

#     newLightColour = colours[i]
#     newMediumColour = colours[i + 1]
#     newDarkColour = colours[i + 2]

#     new_SVG_A = content.replace(lightColour, newLightColour)
#     new_SVG_B = new_SVG_A.replace(mediumColour, newMediumColour)
#     new_SVG_C = new_SVG_B.replace(darkColour, newDarkColour)

#     with open( 'nfts/1/' + str(fileIndex) + '.svg', 'wb') as fout:
#         cairosvg.svg2svg(bytestring=new_SVG_C, write_to=fout)


# for i in range(2, len(colours) - 2, 3): #210 colours
#     fileIndex += 1

#     newLightColour = colours[i]
#     newMediumColour = colours[i + 1]
#     newDarkColour = colours[i + 2]

#     new_SVG_A = content.replace(lightColour, newLightColour)
#     new_SVG_B = new_SVG_A.replace(mediumColour, newMediumColour)
#     new_SVG_C = new_SVG_B.replace(darkColour, newDarkColour)

#     with open( 'nfts/2/' + str(fileIndex) + '.svg', 'wb') as fout:
#         cairosvg.svg2svg(bytestring=new_SVG_C, write_to=fout)




# for i in range(0, len(colours) - 4): #210 colours
#     fileIndex += 1

#     newLightColour = colours[i]
#     newMediumColour = colours[i + 2]
#     newDarkColour = colours[i + 4]

#     new_SVG_A = content.replace(lightColour, newLightColour)
#     new_SVG_B = new_SVG_A.replace(mediumColour, newMediumColour)
#     new_SVG_C = new_SVG_B.replace(darkColour, newDarkColour)

#     with open( 'nfts/3/' + str(fileIndex) + '.svg', 'wb') as fout:
#         cairosvg.svg2svg(bytestring=new_SVG_C, write_to=fout)