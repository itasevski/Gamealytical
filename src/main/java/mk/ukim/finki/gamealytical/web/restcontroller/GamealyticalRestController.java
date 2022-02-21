package mk.ukim.finki.gamealytical.web.restcontroller;

import lombok.AllArgsConstructor;
import mk.ukim.finki.gamealytical.service.GamealyticalService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@AllArgsConstructor
@RequestMapping("/api/gamealytical")
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
