package mk.ukim.finki.gamealytical.service.implementation;

import mk.ukim.finki.gamealytical.service.GamealyticalService;
import org.apache.jena.query.*;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class GamealyticalServiceImplementation implements GamealyticalService {

    private static final String dbpediaSparqlEndpoint = "https://dbpedia.org/sparql";

    private static String allGamesQueryConstructor() {
        // TODO: 19/02/2022
        return "prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>" +
                "prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>" +
                "prefix dbo: <http://dbpedia.org/ontology/>" +
                "prefix dbp: <http://dbpedia.org/property/>" +
                "prefix owl: <http://www.w3.org/2002/07/owl#>" +
                "SELECT DISTINCT ?game ?name ?image (group_concat(distinct ?genre; separator=\", \") as ?genres) (group_concat(distinct ?publisher; separator=\", \") as ?publishers) (group_concat(distinct ?releaseDate; separator=\", \") as ?releaseDates) (group_concat(distinct ?ignRating; separator=\", \") as ?ignRatings) " +
                "WHERE { " +
                "?game rdf:type dbo:VideoGame ; " +
                "rdfs:label ?name ; " +
                "dbo:thumbnail ?image . " +
                "OPTIONAL { ?game dbo:genre ?genreUrl . ?genreUrl rdfs:label ?genre } . " +
                "OPTIONAL { ?game dbo:publisher ?publisherUrl . ?publisherUrl rdfs:label ?publisher } . " +
                "OPTIONAL { ?game dbo:releaseDate ?releaseDate } . " +
                "OPTIONAL { ?game dbp:ign ?ignRating } . " +
                "FILTER(lang(?name) = \"en\")" +
                "FILTER(lang(?genre) = \"en\")" +
                "FILTER(lang(?publisher) = \"en\")" +
                "}" + "GROUP BY ?game ?name ?image";
    }

    private static String singleGameQueryConstructor(String name) {
        return "prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>" +
                "prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>" +
                "prefix dbo: <http://dbpedia.org/ontology/>" +
                "prefix dbp: <http://dbpedia.org/property/>" +
                "prefix owl: <http://www.w3.org/2002/07/owl#>" +
                "SELECT ?game ?name ?description ?image (group_concat(distinct ?developer; separator=\", \") as ?developers) (group_concat(distinct ?genre; separator=\", \") as ?genres) (group_concat(distinct ?publisher; separator=\", \") as ?publishers) (group_concat(distinct ?releaseDate; separator=\", \") as ?releaseDates) (group_concat(distinct ?platform; separator=\", \") as ?platforms) (group_concat(distinct ?ignRating; separator=\", \") as ?ignRatings) ?comment (group_concat(distinct ?related; separator=\", \") as ?relatedTopics) " +
                "WHERE { " +
                "?game rdfs:label" + "\"" + name + "\"@en ; " +
                "rdfs:label ?name ; " +
                "dbo:abstract ?description . " +
                "OPTIONAL { ?game dbo:thumbnail ?image } . " +
                "OPTIONAL { ?game rdfs:comment ?comment } . " +
                "OPTIONAL { ?game owl:sameAs ?related } . " +
                "OPTIONAL { ?game dbo:developer ?developerUrl . ?developerUrl rdfs:label ?developer } . " +
                "OPTIONAL { ?game dbo:genre ?genreUrl . ?genreUrl rdfs:label ?genre } . " +
                "OPTIONAL { ?game dbo:publisher ?publisherUrl . ?publisherUrl rdfs:label ?publisher } . " +
                "OPTIONAL { ?game dbo:releaseDate ?releaseDate } . " +
                "OPTIONAL { ?game dbo:computingPlatform ?platformUrl . ?platformUrl rdfs:label ?platform } . " +
                "OPTIONAL { ?game dbp:ign ?ignRating } . " +
                "FILTER(lang(?name) = \"en\")" +
                "FILTER(lang(?description) = \"en\")" +
                "FILTER(lang(?comment) = \"en\")" +
                "FILTER(lang(?developer) = \"en\")" +
                "FILTER(lang(?genre) = \"en\")" +
                "FILTER(lang(?publisher) = \"en\")" +
                "}" + "GROUP BY ?game ?name ?description ?image ?comment";
    }

    private static String featuredGamesQueryConstructor() {
        return "prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>" +
                "prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>" +
                "prefix dbo: <http://dbpedia.org/ontology/>" +
                "prefix dbp: <http://dbpedia.org/property/>" +
                "prefix owl: <http://www.w3.org/2002/07/owl#>" +
                "prefix xsd: <http://www.w3.org/2001/XMLSchema#>" +
                "SELECT DISTINCT ?game ?name ?comment ?image ?ignRating (group_concat(distinct ?releaseDate; separator=\", \") as ?releaseDates) " +
                "WHERE { " +
                "?game rdf:type dbo:VideoGame ; " +
                "rdfs:label ?name ; " +
                "rdfs:comment ?comment ; " +
                "dbo:thumbnail ?image ; " +
                "dbp:ign ?ignRating . " +
                "OPTIONAL { ?game dbo:releaseDate ?releaseDate } . " +
                "FILTER(lang(?name) = \"en\")" +
                "FILTER(lang(?comment) = \"en\")" +
                "FILTER(xsd:decimal(?ignRating))" +
                "}" + "GROUP BY ?game ?name ?comment ?image ?ignRating ORDER BY DESC(?ignRating) LIMIT 20";
    }

    private static List<Map<String, String>> executeAllGamesQuery() {
        String queryString = allGamesQueryConstructor();

        Query query = QueryFactory.create(queryString);

        List<Map<String, String>> videoGameList = new ArrayList<>();

        try(QueryExecution queryExecution = QueryExecutionFactory.sparqlService(dbpediaSparqlEndpoint, query)) {
            ResultSet resultSet = queryExecution.execSelect();
            QuerySolution querySolution;
            Map<String, String> videoGameMap;
            while (resultSet.hasNext()) {
                querySolution = resultSet.next();

                videoGameMap = new HashMap<>();

                videoGameMap.put("game", querySolution.get("game").toString());
                videoGameMap.put("name", querySolution.get("name").toString());
                videoGameMap.put("image", querySolution.get("image").toString());
                videoGameMap.put("genre", querySolution.get("genres").toString());
                videoGameMap.put("publisher", querySolution.get("publishers").toString());
                videoGameMap.put("releaseDates", querySolution.get("releaseDates").toString());
                videoGameMap.put("ignRating", querySolution.get("ignRatings").toString().split("\\^\\^")[0]);

                videoGameList.add(videoGameMap);
            }
        }
        catch (Exception e) {
            System.err.println(e.getMessage());
        }

        return videoGameList;
    }

    private static Map<String, String> executeSingleGameQuery(String name) {
        String queryString = singleGameQueryConstructor(name);

        Query query = QueryFactory.create(queryString);

        Map<String, String> videoGameMap = new HashMap<>();

        try(QueryExecution queryExecution = QueryExecutionFactory.sparqlService(dbpediaSparqlEndpoint, query)) {
            ResultSet resultSet = queryExecution.execSelect();
            QuerySolution querySolution = resultSet.next();
            videoGameMap.put("game", querySolution.get("game").toString());
            videoGameMap.put("name", querySolution.get("name").toString());
            videoGameMap.put("description", querySolution.get("description").toString());
            videoGameMap.put("comment", querySolution.get("comment").toString());
            videoGameMap.put("image", querySolution.get("image").toString());
            videoGameMap.put("genre", querySolution.get("genres").toString());
            videoGameMap.put("developer", querySolution.get("developers").toString());
            videoGameMap.put("publisher", querySolution.get("publishers").toString());
            videoGameMap.put("releaseDates", querySolution.get("releaseDates").toString());
            videoGameMap.put("platforms", querySolution.get("platforms").toString());
            videoGameMap.put("ignRating", querySolution.get("ignRatings").toString().split("\\^\\^")[0]);
            videoGameMap.put("relatedTopics", querySolution.get("relatedTopics").toString());
        }
        catch (Exception e) {
            System.err.println(e.getMessage());
        }

        return videoGameMap;
    }

    private static List<Map<String, String>> executeFeaturedGamesQuery() {
        String queryString = featuredGamesQueryConstructor();

        Query query = QueryFactory.create(queryString);

        List<Map<String, String>> videoGameList = new ArrayList<>();
        List<Map<String, String>> pickedVideoGames = new ArrayList<>();

        Random random = new Random();
        int bound = 20;

        try(QueryExecution queryExecution = QueryExecutionFactory.sparqlService(dbpediaSparqlEndpoint, query)) {
            ResultSet resultSet = queryExecution.execSelect();
            QuerySolution querySolution;
            Map<String, String> videoGameMap;
            while (resultSet.hasNext()) {
                querySolution = resultSet.next();

                videoGameMap = new HashMap<>();

                videoGameMap.put("game", querySolution.get("game").toString());
                videoGameMap.put("name", querySolution.get("name").toString());
                videoGameMap.put("comment", querySolution.get("comment").toString());
                videoGameMap.put("image", querySolution.get("image").toString());
                videoGameMap.put("ignRating", querySolution.get("ignRating").toString().split("\\^\\^")[0]);
                videoGameMap.put("releaseDates", querySolution.get("releaseDates").toString());

                videoGameList.add(videoGameMap);
            }
        }
        catch (Exception e) {
            System.err.println(e.getMessage());
        }

        List<Integer> randomNumbersList = new ArrayList<>(4);

        while (pickedVideoGames.size() < 4) {
            int randomIndex = random.nextInt(bound);
            if(randomNumbersList.contains(randomIndex)) {
                continue;
            }
            randomNumbersList.add(randomIndex);
            pickedVideoGames.add(videoGameList.get(randomIndex));
        }

        return pickedVideoGames;
    }

    @Override
    public List<Map<String, String>> getAllVideoGames() {
        return executeAllGamesQuery();
    }

    @Override
    public Map<String, String> getVideoGameByName(String name) {
        return executeSingleGameQuery(name);
    }

    @Override
    public List<Map<String, String>> getFeaturedVideoGames() {
        return executeFeaturedGamesQuery();
    }

}
