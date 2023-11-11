import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.Socket;
import java.net.UnknownHostException;

import javax.swing.InputMap;

public class Client {
    public static void main(String[] args) throws NumberFormatException, UnknownHostException, IOException {
        Socket socket = new Socket(args[0], Integer.parseInt(args[1]));
        BufferedReader input = new BufferedReader( new InputStreamReader(socket.getInputStream()));
        
        String line = input.readLine();
        System.out.println(line);
        input.close();
        socket.close();
    }
}
