# Availity Assignment 
# Gabriel Pridham
#
# Read in a csv file, sort enrollees into respective company file
# Make sure enrollees is sorted by lastname and firstname in ascending order
# If duplicate userid for same company, only save the entry with highest version

# Tested on Python 3.6.2    
# I assume that the first row in the csv file has the following name: UserId, FirstName, LastName, Version, Insurance Company
# And I assumed each row has expected values

import csv

def writeToCsv(results, fieldNames, outputFile):
    writer = csv.DictWriter(open(outputFile, 'w'), fieldNames)
    writer.writeheader()
    writer.writerows(results)



def main():
    inputFile = csv.DictReader(open("test1.csv"))
    sortedByCompany = {}

    # Group data by company and remove duplicates with lower version
    for row in inputFile:
        key = row['Insurance Company']
        if key not in sortedByCompany.keys():
            sortedByCompany[key] = {}

        # if dupicate UserId, check version and save highest version
        if row["UserId"] in sortedByCompany[key].keys():
            if row["Version"] > sortedByCompany[key][row["UserId"]]["Version"]:
                sortedByCompany[key][row["UserId"]] = row
        else:
            sortedByCompany[key][row["UserId"]] = row

        

    # Write data to each company file
    for key, data in sortedByCompany.items():
        # Sort by lastname and firstname in ascending order
        results = sorted(data.values(), key=lambda item: (item['LastName'], item['FirstName']) )
        writeToCsv(results, inputFile.fieldnames, key + ".csv")


    

if __name__ == "__main__":
    main()