import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

public class Client {

  public static void main(String[] args) throws Exception {
    String hostname = "example.com";
    String username = "username";
    String password = "password";
    String command = "ls -l";

    String result = executeCommand(hostname, username, password, command);
    System.out.println(result);
  }

  public static String executeCommand(String hostname, String username, String password, String command) throws Exception {
    ExecutorService executor = Executors.newSingleThreadExecutor();
    try {
      StringBuilder output = new StringBuilder();

      Callable<Void> task = () -> {
        Process process = new ProcessBuilder("ssh", username + "@" + hostname, command)
            .redirectErrorStream(true)
            .start();
        try (BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()))) {
          reader.lines().forEach(output::append);
        }
        return null;
      };

      Future<Void> future = executor.submit(task);
      future.get();

      return output.toString();
    } finally {
      executor.shutdown();
    }
  }
}
