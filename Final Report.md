#Crime in Hyattsville, Maryland

Team Members: Evan Hulse, Andy Loftus, Neel Shah, Vinay Mantha, James Nicol

Try running the live version: https://inst377crimeproject.herokuapp.com/

This webpage is trying to solve the lack of crime information provided to the people of Hyattesville, MD. 
These crimes negatively impact the people in this area daily. We are hoping that with more information at their fingertips, 
they can try and avoid criminal activity. This webpage includes specific details on the types and number of incidents 
occuring frequently in what areas.

Our stakeholders include the general public in the College Park Community as well as the PG County Police Department.

The data for this webpage is taken from an external source, found at https://data.princegeorgescountymd.gov/Public-Safety/Crime-Incidents-February-2017-to-Present/wb4e-w4nf. The database is called "PG County Crime Incidents February 2017 to Present" and is narrowed down to include information pertaining to Sector B of PG County (Hyattsville, MD).

We utilized several strategies and solutions in order to solve this problem. Immediately, when the user opens our webpage, the "Home" tab displays the 10 most recent crimes reported. Along with the "Home" tab we also included several other tabs that allow the user to search through the database. For the "Crimes" tab we used javascript functions and and the table library to allow the user to filter crimes that were reported based on a street name seach or incident type search. Furthermore, we used the Window library extensively and passed identifiers through separate URL parameters in order to send separate data to each crime type category link. Lastly, to minimize confusion of the webpage and its contents, we included an "About" tab that explains the problem it is trying to solve and what information can be found. We all gave our input for what to include, and designated work based on understanding and skill for what needed to be done.

Some technical decisions we had to make within our webpage is how to send information to our webpage, and how we were going to allow the user to filter through the database. We chose to utilize the Windows Library and send information to our database through separate URL parameters because the data being passed would exceeded the limit that can be held in local storage. Furthermore, we used the input javascript function and the Table Library in order to let the user freely search the database based on what street or incident type they type in. We chose to allow the user to filter the table based on their search because we felt that it would be easier, and more presentable, to filter the data based on a matching term and displaying only the crimes that fit the search. This approach was chosen over ordering the reported crimes in alphabetical order because the table would be very large, and we felt that it would be difficult to account for some street addresses including house numbers, and others not.
