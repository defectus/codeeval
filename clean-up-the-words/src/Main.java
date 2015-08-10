import java.io.*;

public class Main {

   public static void main(String[] args) throws IOException {
      File file = new File(args[0]);
      BufferedReader buffer = new BufferedReader(new FileReader(file));
      String line;
      while ((line = buffer.readLine()) != null) {
         line = line.trim();
         line = line.replaceAll("[^a-zA-Z]", " ").replaceAll("\\ +", " ").trim();
         System.out.println(line.toLowerCase());
      }
   }
}
