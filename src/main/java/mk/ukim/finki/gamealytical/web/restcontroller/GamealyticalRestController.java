package mk.ukim.finki.gamealytical.web.restcontroller;

import lombok.AllArgsConstructor;
import mk.ukim.finki.gamealytical.service.GamealyticalService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@AllArgsConstructor
@RequestMapping("/api/gamealytical")
@CrossOrigin(origins = "http://localhost:3000")
public class GamealyticalRestController {

    private final GamealyticalService gamealyticalService;

    @GetMapping
    public List<Map<String, String>> getAllVideoGames() {
        return this.gamealyticalService.getAllVideoGames();
    }

    @GetMapping("/find")
    public Map<String, String> getVideoGameByName(@RequestParam String name) {
        return this.gamealyticalService.getVideoGameByName(name);
    }

    @GetMapping("/featured")
    public List<Map<String, String>> getFeaturedVideoGames() {
        return this.gamealyticalService.getFeaturedVideoGames();
    }

}
