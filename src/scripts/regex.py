# This script is used to convert some text files into output for data collection
import re

# opens files to be analysed
f = open('results.txt','r')
g = open('output.txt','w+')
line = f.readline()

placing = 1

# scrapes data from '{name} {record}, {deck}'
# e.g: Eder Jarillo Soto (8-1-0), Turbo Reshiram & Charizard-GX
while line:
    name = ""
    deck = ""
    # matchObj = re.match( r'(.*) \([\d]-[\d]-[\d]\), (.*)', line, re.M|re.I)
    matchObj = re.split(r'\W+', line)
    # prints into a file
    if (matchObj):
        name = matchObj[1] + " " + matchObj[2]
        print(name)
        # print("NAME: " + name)
        # deck = matchObj[2]
    # else:
        # matchObj = re.match( r'(.*) \([\d]-[\d]-[\d]\)', line, re.M|re.I)
        # name = matchObj.group(1)
        # deck = ""

    g.write("{ name: \"" + name + "\", deck: \"" + deck + "\", placing: " + str(placing) + " },\n")

    # next line
    line = f.readline()
    placing += 1

f.close()
g.close()
