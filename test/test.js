async function signUp() {
    const { user, error } = await supabase.auth.signUp({
        email: 'user@example.com',
        password: 'yourpassword',
    });

    if (error) {
        console.error('Sign up error:', error);
    } else {
        console.log('User signed up:', user);
    }
}
async function signIn() {
    const { user, error } = await supabase.auth.signInWithPassword({
        email: 'user@example.com',
        password: 'yourpassword',
    });

    if (error) {
        console.error('Sign-in error:', error);
    } else {
        console.log('User signed in:', user);
    }
}
async function signOut() {
    const { error } = await supabase.auth.signOut();

    if (error) {
        console.error('Sign-out error:', error);
    } else {
        console.log('User signed out');
    }
}

const channel = supabase
    .channel('public:your_table_name') // Specify the table you're listening to
    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'your_table_name' }, payload => {
        console.log('New row added:', payload);
    })
    .subscribe();
async function insertData() {
    const { data, error } = await supabase
        .from('your_table_name') // replace with your actual table name
        .insert([
            { column_name: 'value1', column_name2: 'value2' }
        ]);

    if (error) {
        console.error('Insert error:', error);
    } else {
        console.log('Data inserted:', data);
    }
}
async function updateData() {
    const { data, error } = await supabase
        .from('your_table_name')
        .update({ column_name: 'new_value' })
        .match({ id: 1 }); // Specify the row to update based on a condition

    if (error) {
        console.error('Update error:', error);
    } else {
        console.log('Data updated:', data);
    }
}
const { data, error } = await supabase
    .from('your_table_name')
    .select('*');

if (error) {
    console.error('Error:', error);
} else {
    console.log('Data:', data);
}
