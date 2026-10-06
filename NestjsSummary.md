1. Define Ticket Model
   Command: nest g interface tickets/ticket --flat
   (--flat na dile nestjs by-default nijer jonno arekta alada folder banay. amra ei unnecessary folder chai na , tai --flat use korechi.)
   
2. How to catch Dynamic id (GET--> /api/tickets/:id) 40:00
    * URL theke asha route parameter runtime a sob-somoy 'string' hisebei ashe.
    * Reading dynamic params: @Param 
    * Parsing url string to int: ParseIntPipe
    
3. Reading Query String
    * `@Query()`
    Invalid query params dile ki hobe?

4. Getting body
    * `@Body`

5. Client er kache theke kemon data nibe ei class (DTO) er maddhome amra seta define kore dibo. 
    nest g class tickets/dto/create-ticket.dto --no-spec --flat
    
    (typescript checks only at COMPILE TIME)
    (runtime a check korar jonno class validator ar class transformer use korbo)
    bash 
    ```pnpm add class-validator class-transformer```

6. 
        ---- nestjs Validation Pipeline ---- 
    Class Validator --> Checks the Rules
    Class transformer --> incoming JSON into a DTO Class er instance  

7. Nijer create kora file na hoile .js lagbe na.karon eita ekta installed package theke asche. 

8. DTO is not the Model. 

9. creating DTO: nest g class tickets/dto/create-ticket.dto --no-spec --flat

10. Creating query filter dto : nest g class tickets/dto/filter-tickets-query.dto --no-spec --flat

12. whitelist : true --> silently ignores invalid fields.
    forbidNonWhitelist : true --> Shows errors. 

13. @Query() with no name - the whole object (after adding query filter dto)

14. Update-Ticket-Dto : nest g class ticktes/dto/update-ticket.dto --no-spec --flat

15. Patch default issue with non-changed fields. Fix: in the tsconfig add this line under compilerOptions: 

    bash 
    ``` "useDefineForClassFields": false```
    
16. Middleware --> before the controller. Middleware intercepts requests before it going to the controller.
    bash
    ``` nest g middleware common/request-logger --no-spec --flat```
    
17. Guard bash
    ```nest g guard tickets/guards/staff --no-spec --flat```
    
18. Middleware vs Guard

    Middleware shadharon request intercept korar jonno. 
    Guard access control er jonno.
    
    Middleware agee cholee, tarpor Gurad chole. 
    
19. Interceptor. Controller --> Interceptor --> Client
    
    bash 
    ```nest g interceptor common/response --no-spec --flat```

20. Amader Interceptor er map tokhoni kaj korche, jokhon handler theke ekta succcessfull result firee asche. Kintu exception holee succcessfull result ar firee ashe na. tokhon error ta nest er exception handling er flow te kaj kore. 


21. Summary: 

    - Module diye feature gulo ke alada korechi.
    - Controller diye http request handle korechi. 
    - Service a business logic. Dependency injection diye controller er sathe service ke connecct korechi. 
    - Client ki data pathate parbe seta DTO diye define korechi. 
    - Pipe diye sei data ta validate korechi. 
    
    
    - Exception : Kothau kono vul holee proper exception diye error response dekhiyechi.
    - Middleware : Common logging middleware, then access, then response
    - Guard : Close er moto sensitive action protect korar jonno Guard use korechi.
    - Interceptor : Sob successfull response ke ek e structure a  anar jonno Interceptor use korechi. 
    


    















