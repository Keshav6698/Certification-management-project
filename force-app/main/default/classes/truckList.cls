public with sharing class truckList {
    @AuraEnabled(Cacheable=true)
    public static List<Truck__c> search(){
        return [SELECT Id,Name,Maximum_Load__c,Cost__c FROM Truck__c LIMIT 10];
    }
}