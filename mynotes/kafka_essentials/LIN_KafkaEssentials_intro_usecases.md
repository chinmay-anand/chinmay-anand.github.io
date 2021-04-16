[Official **Kafka use cases**](https://kafka.apache.org/uses)

Kafka Usecases in corporate world:
* Walmart -- Stream processing (Streaming Analytics)
* Cisco -- Log Aggregation
* Netflix -- User activity tracking
* Spotify -- User activity tracking
* PayPal -- Stream Processing
* Uber -- Advanced Stream Processing
* Credit card companies -- Stream processing of realtime logs

Few other Kafka usecase scenarios:
* Companies use "Messaging" to develop loosely coupled systems (without interdependence) for transferring data between those systems, using the platform as some sort of bus. E.g. microservices architecture on a large-scale platform.

* Some big companies like PayPal, use Kafka to process their billions of financial transactions accurately and timely to prevent fraud.

* Streaming Analytics (Stream Processing)
  * Retailers like Walmart, have billions of transactions every single day which need to be streamed in to a data platform, and some of them need to be processed and handled immediately, while others need to be used for analytics later on, and Kafka suits those needs for them.
  * Uber is an interesting use case, uses Kafka realtime streaming to connect riders and drivers (who is where, where you are going and tries to optimize it).


* Log Aggregation or Combining different types of data streams
  * Technology companies like Cisco System use Kafka to help them combine a lot of different data streams and create a consistent and true understanding of how their business is running. Their data input can come from cameras to networking gear to software, each having lots of transactions that are happening across all these different systems that they use to run their business. Kafka may not be the central part for everything at Cisco, but it definitely is very useful to make a comnsistent use of data.

* User action tracking - for system improvement, better recommendation based on user actions and better user experience by remembering where user left off last time when watchign moving or listenign a music.
  * Netflix, a high tech video streaming company, uses Kafka heavily to track every user event, either watched movies or watched a point in the movie.  This helps to give better recommendation based on user choice or better user expereicne by switching to same point where user left off last time on tha tmovie.
  * Spotify is a streaming music service that uses Kafka, and just like Netflix, as you're listening to songs and skipping from playlist or recommendations or liking things, all of those events, those changes, are being captured in Kafka, and then being used to provide a better user experience for you as a user of Spotify.


* Web Activity Tracking:
  * Another use case for streaming analytics is __web analytics__. So every activity (page view, search etc) on your website  is published to central topics with one topic per activity type, all of these can be streamed into your Kafka cluster,
  * and you can even augment the streams in real time based on what they did on their activity on your website. 
  
* Operational Monitoring -- For companies that are operating in a more traditional sense like a manufacturing facility, you can use Kafka 
  * to monitor all the machines through their sensors in your plant. 
  * and process that data in real time to give you some understanding of how the line is operating.
  * You can even apply machine learning algorithms here to figure out if there's going to be a problem downstream and you can try to predict that and prevent it from occurring in the first place.

* Log Collection -- Another common case is log collection, where 
  * different applications from different systems that may be distributed all over the world, are generating the same types of log data (like access requests to your website). Think access requests to your website or something like that.
  * Now instead of having all of these logs spread out all over the place, and trying to combine certain ones and analyzing them and giving your data scientists headaches because they don't know which ones are the right ones to pull in,
    * you can combine them all with Kafka into a single log collection mechanism.
    * You can use stream processing the data instead of batching your data over, i.e. instead of taking chunks every night or every hour, you can handle these events or processing them as they occur.

* Stream Processing -- A typical example use case can be financial transaction logs such as credit card fraud detection etc.
  * The abbnormal transactuions, excessive amount usage, usage at a abnormal place etc should be detected upfront and can be prevented from happening using and processing live realtime streaming logs. This can be done by declining the card or sending you a phone call or pops an alert on your phone etc.
  * If we don't process this data in realtime and are processing such financial logs periodically as a batch process is very dangerous and can cause big losses to the company as the frauds can not be detected till the next time the batch job runs.

* Commit Logs - These are another use case where we record a sequence of transactions which can be later used to bring back the state by replaying the sequence of transactions or reverese some transactions etc.
  
A great post from Jay Kreps, one of the Kafka founders of it, - post about what every software engineer should know about real-time data and logs - Useful for understanding why we're using real-time streaming systems like Kafka.

