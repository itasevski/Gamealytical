package mk.ukim.finki.gamealytical.service;

import java.util.List;
import java.util.Map;

public interface GamealyticalService {

    List<Map<String, String>> getAllVideoGames();

    Map<String, String> getVideoGameByName(String name);

    List<Map<String, String>> getFeaturedVideoGames();

}
