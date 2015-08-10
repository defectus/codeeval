import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.Map;

public class Main {

   public static void main(String[] args) throws IOException {
      File file = new File(args[0]);
      BufferedReader buffer = new BufferedReader(new FileReader(file));
      String line;
      while ((line = buffer.readLine()) != null) {
         String longestWord = "";
         for (String word : line.split(" ")) {
            if (word.length() > longestWord.length()) {
               longestWord = word;
            }
         }
         int i = 0;
         String result = "";
         for (char c : longestWord.toCharArray()) {
            String padding = "";
            for (int j = 0; j < i; j++)
               padding += "*";
            result += padding + c + " ";
            i++;
         }
         System.out.println(result.trim());
      }
   }
}
