// Import the Supabase client
require('dotenv').config();
import { createClient } from '@supabase/supabase-js'; 

// Replace these with your Supabase project details
const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY

// Create a Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

// Example: Fetch data from a table
async function fetchData() {
    const { data, error } = await supabasez
        .from('your_table_name') // Replace with your table name
        .select('*'); // Select all columns

    if (error) {
        console.error('Error fetching data:', error);
    } else {
        console.log('Data:', data);
    }
}

// Example: Insert data into a table
async function insertData() {
    const { data, error } = await supabase
        .from('your_table_name') // Replace with your table name
        .insert([
            { column1: 'value1', column2: 'value2' } // Replace with your table columns and values
        ]);

    if (error) {
        console.error('Error inserting data:', error);
    } else {
        console.log('Inserted data:', data);
    }
}

// Call the functions
fetchData();
insertData();
