import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://yrhpgqqknjkzsrbjwugh.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlyaHBncXFrbmprenNyYmp3dWdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY3MDQ0MzYsImV4cCI6MjA1MjI4MDQzNn0.DU9LznwPF1kLTAqJBKjNbvQoZA3FRs8ep0QVlsseYRw"
);

/**
 * Waits for the user to confirm their email.
 * @param {string} email - The user's email address.
 * @param {number} timeout - The maximum time to wait (in ms).
 * @param {number} interval - The polling interval (in ms).
 */
async function waitForEmailConfirmation(
  email,
  timeout = 60000,
  interval = 5000
) {
  const startTime = Date.now();

  while (Date.now() - startTime < timeout) {
    // Fetch the user's data
    const { data, error } = await supabase.auth.admin.getUserByEmail(email);

    if (error) {
      console.error("Error fetching user:", error.message);
      return { success: false, error };
    }

    // Check if the user has confirmed their email
    if (data && data.email_confirmed_at) {
      console.log("Email confirmed at:", data.email_confirmed_at);
      return { success: true, user: data };
    }

    console.log("Waiting for email confirmation...");
    await new Promise((resolve) => setTimeout(resolve, interval));
  }

  console.error("Timeout waiting for email confirmation");
  deleteUser(email);
  return { success: false, error: "Timeout waiting for email confirmation" };
}

async function signInWithGoogle() {
  supabase.auth.signIn({ provide: "google" });
}
async function signUpWithEmail(email, password, username, uName) {
  const { data, error } = await supabase.auth.signUp(
    {
      email: email,
      password: password,
    },
    {
      data: {
        name: uName,
        username: username,
      },
    }
  );
  await waitForEmailConfirmation(email);
  if (error) {
    console.error("Error signing up:", error.message);
    return { success: false, error };
  }

  console.log("User signed up:", data);
  return { success: true, data };
}
async function getUserByEmail(email) {
  const { data, error } = await supabase.auth.admin.listUsers();

  if (error) {
    console.error("Error fetching users:", error.message);
    return { success: false, error };
  }

  const user = data.users.find((user) => user.email === email);

  if (user) {
    console.log("User found:", user);
    return { success: true, user };
  } else {
    console.log("No user found with this email.");
    return { success: false, error: "User not found" };
  }
}
async function getProfileByEmail(email) {
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("email", email);

  if (error) {
    console.error("Error fetching profile:", error.message);
    return { success: false, error };
  }

  if (data.length > 0) {
    console.log("Profile found:", data[0]);
    return { success: true, profile: data[0] };
  } else {
    console.log("No profile found for this email.");
    return { success: false, error: "Profile not found" };
  }
}
async function deleteUser(userId) {
    const { data, error } = await supabase.auth.admin.deleteUser(userId);
  
    if (error) {
      console.error('Error deleting user:', error.message);
      return { success: false, error };
    }
  
    console.log('User deleted:', data);
    //active the failed notif
    return { success: true, data };
  }
  