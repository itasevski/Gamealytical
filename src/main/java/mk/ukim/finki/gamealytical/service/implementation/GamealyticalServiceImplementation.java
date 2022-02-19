package mk.ukim.finki.gamealytical.service.implementation;

import mk.ukim.finki.gamealytical.service.GamealyticalService;
import org.apache.jena.query.*;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class GamealyticalServiceImplementation implements GamealyticalService {

    private static final String dbpediaSparqlEndpoint = "https://dbpedia.org/sparql";

    private static String allGamesQueryConstructor() {
        // TODO: 19/02/2022
        return "";
    }

    private static String singleGameQueryConstructor(String name) {
        return "prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>" +
                "prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>" +
                "prefix dbo: <http://dbpedia.org/ontology/>" +
                "prefix dbp: <http://dbpedia.org/property/>" +
                "prefix owl: <http://www.w3.org/2002/07/owl#>" +
                "select ?game ?name ?description ?image ?developer ?genre ?publisher (group_concat(distinct ?releaseDate; separator=\", \") as ?releaseDates) (group_concat(distinct ?platform; separator=\", \") as ?platforms) ?ignRating ?comment (group_concat(distinct ?related; separator=\", \") as ?relatedTopics)" +
                "where { " +
                "?game rdfs:label" + "\"" + name + "\"@en ; " +
                "rdfs:label ?name ; " +
                "dbo:abstract ?description ; " +
                "dbo:thumbnail ?image ; " +
                "rdfs:comment ?comment ; " +
                "owl:sameAs ?related . " +
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
                "FILTER(lang(?publisher) = \"en\")" +
                "FILTER(lang(?genre) = \"en\")" +
                "}" + "GROUP BY ?game ?name ?description ?image ?developer ?genre ?publisher ?ignRating ?comment";
    }

    private static Map<String, String> executeAllGamesQuery() {
        // TODO: 19/02/2022
        return null;
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
            videoGameMap.put("genre", querySolution.get("genre").toString());
            videoGameMap.put("developer", querySolution.get("developer").toString());
            videoGameMap.put("publisher", querySolution.get("publisher").toString());
            videoGameMap.put("releaseDates", querySolution.get("releaseDates").toString());
            videoGameMap.put("platforms", querySolution.get("platforms").toString());
            videoGameMap.put("ignRating", querySolution.get("ignRating").toString().split("\\^\\^")[0]);
            videoGameMap.put("relatedTopics", querySolution.get("relatedTopics").toString());
        }
        catch (Exception e) {
            System.err.println(e.getMessage());
        }

        return videoGameMap;
    }

    @Override
    public List<Map<String, String>> getAllVideoGames() {
        return null;
    }

    @Override
    public Map<String, String> getVideoGameByName(String name) {
        return executeSingleGameQuery(name);
    }







    // HELPER

    //    public static String queryConstructor(String name) {
//        return "prefix dcterms: <http://purl.org/dc/terms/>" +
//                "SELECT *" +
//                "WHERE { " +
//                "<" + name + ">" + " dcterms:title ?title ; " +
//                "dcterms:description ?description . " +
//                "}";
//    }
}
