f = open('results.txt','r')
g = open('output.txt','w+')
line = f.readline()

# scrapes data from '{placing} {name} - {deck}'
# e.g: 1st Jeremy Lim - Pikachu & Zekrom-GX
while line:
    prev = 0
    i = 0
    # print(line)

    # collects the placing
    for letter in line:
        i += 1
        if (line[i].isdigit() != True):
            break;

    placing = line[prev:i]
    # print(placing)

    for letter in line:
        if (line[i] == ' '):
            break;
        i += 1

    # collects the name
    prev = i+1
    for letter in line:
        if (line[i] == ' '):
            break;
        i += 1

    for letter in line:
        if (line[i] == ' '):
            break;
        i += 1

    for letter in line:
        i += 1
        if (line[i] == '-'):
            break;

    name = line[prev:i-1]
    print(name)
    print(len(name))

    # collects the deck
    prev = i+2

    for letter in line:
        if (line[i] == ' '):
            break;
        i += 1

    deck = line[prev:len(line)-1]
    print(deck)
    print(len(deck))
    print("")
    # prints into a file
    g.write("{ name: \'" + name + "\', deck: \'" + deck + "\', placing: " + placing + " },\n")

    # next line
    line = f.readline()

f.close()
g.close()
