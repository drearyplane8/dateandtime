import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.net.ServerSocket;
import java.net.Socket;
import java.net.UnknownHostException;
import java.time.Instant;
import java.time.ZoneId;

public class Server {
    public static void main(String[] args) throws NumberFormatException, UnknownHostException, IOException {
        ServerSocket socket = new ServerSocket(Integer.parseInt(args[0]));
        System.out.println("server started");
        Socket connection = socket.accept();
        System.out.println("connection made");

        OutputStream stream = connection.getOutputStream();
        OutputStreamWriter writer = new OutputStreamWriter(stream);

        Instant currentTime = Instant.now();
        
        int day = (int) Instant.now().atZone(ZoneId.systemDefault()).getDayOfMonth();
        System.out.println("day is" + day);
        writer.write(String.valueOf(day));
        writer.close();
        System.out.println("sent");
    }
}
