import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class fdf {
  public static void main(String[] args) {
    // Create the frame
    JFrame frame = new JFrame("Python Addition");
    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    frame.setSize(300, 200);

    // Create a button
    JButton button = new JButton("Compute 1 + 1");

    // Set up button action
    button.addActionListener(new ActionListener() {
      @Override
      public void actionPerformed(ActionEvent e) {
        try {
          // Call the Python script
          ProcessBuilder pb = new ProcessBuilder("C:\\Users\\Toshiba\\PycharmProjects\\pythonProject\\venv\\Scripts\\python.exe", "D:\\CSE\\TEST\\sdf\\src\\compute.py", "1", "1");
          Process process = pb.start();

          // Read the output from the Python script
          BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
          String result = reader.readLine();

          // Show the result in a dialog
          JOptionPane.showMessageDialog(frame, "Result: " + result);

        } catch (IOException ex) {
          ex.printStackTrace();
        }
      }
    });

    // Add the button to the frame
    frame.getContentPane().add(button);
    frame.setVisible(true);
  }
}
