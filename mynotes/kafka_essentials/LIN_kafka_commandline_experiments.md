#. Set MY_KAFKA_HOME to the kafka installation directory so that we can use it for fetching kafka scripts and configuration files. Also put the scripts location to the path environment variable (in user environment of in each terminal window)
```
> set MY_KAFKA_HOME=D:\Programs\apache\kafka_2.13-2.5.0
> set path=%MY_KAFKA_HOME%\bin\windows;%path%
```
#. I have set in environment variable, so no need to explicitly set in each terminal window.

#. The config folder contains the property files that includes the following details:
* zookeeper.properties
  * Imp parameters: clientPort, dataDir
* server.properties
  * Imp parameters: broker.id, listeners, log.dirs, zookeeper.connect
  * For each additional broker we need all the parameters in default file with atleast 3 unique values for "broker.id", "listeners", and "log.dirs")
  * all these brokers should have the same "zookeeper.connect" to work in a cluster mode.
* In all these property files I have hardcoded the log location into a different drive with big free space as server logs tend to be coming in GBs. I have hardcoded to "E:/KAFKA_HEAVY_LOGS/..." for both zookeeper ("dataDir") and kafka server ("log.dirs").

<hr/>

* Kafka Testing Steps:
  * Start the server (i.e. broker)
    * First start zookeeper and then start server/broker as the broker contacts zookeeper.
    * zookeeper-server-start.bat, kafka-server-start.bat
  * Create a topic
    * Provide zookeeper, replication-factor, partitions and topic
    * The zookeeper creates the topic with partitions on all the brokers.
    * kafka-topics.bat
  * Run the producer to write messages to the topic
    * Provide broker-list and topic
    * The producer can be started from termincal console for testing or can eb started from an application in java or python.
    * kafka-console-producer.bat or our application.
  * Run the consumer to read the messages from the broker on a topic from a specific offset of beginning
    * Provide bootstrap-server (pointing to the broker), topic and from-beginning or offset.
    * Whatever new line we enter at the producer terminal will appear on all the consumer terminals.
* Minimalist testing steps:
  1. Start zookeeper followed by broker (kafka-server-start.bat)
  2. Create a kafka topic (topic creation needs zookeeper)
  3. Start the kafka console producer and write few message at the producer console.
  4. Start one or more kafka console consumers, which will start reading the messages written by the producer.
  5. Producer and Consumers need the broker, not the zookeeper.
  .
<hr/>

* Cluster testing steps:
  1. Start zookeeper and start the default broker.
  2. Duplicate the default server.properties into two copies and change broker.id, listeners, login.dirs to make unique for each new configuration.
  3. Start two new broker servers one with each of the new server properties files. So now there are 3 brokers running.
  4. Create a kafka topic with "replication-factor" of 3 and "partitions" of 1 with a new topic name. The new topic gets replicated to the 3 nodes/brokers/servers.
  5. Start a new kafka console producer instance fro the new topic connecting to the old node (port 9092) and write few message at the producer console.
  6. Start one or more kafka console consumers, which will start reading the messages written by the producer.
  7. To test **fault-tolerance**, we will now kill one of the brokers to see the impact. 
      * Used topic describe to find out the lead partition numbers (i.e. assiciated broker-ids)
      * Go to the server console with the properties file representing the broker-id matching with the lead partition and press CTRL+C to stop that server.
      * Now again do a topic describe to observe that the lead partition must have changed and ISR (In sync replica) would have decreased from 3 values to 2 values.
      * But a message sent now from producer still appears in consumer, so no loss in functionality.
      * Now if we restart the closed broker, this one joins the cluster again and the ISR changes from 2 values to 3 values but the lead partition remains at the last changed value, as we did nto stop the now running lead partition broker.

<hr/>

#### Import and Export of Data (file to file) using Kafka
* Logic: **Setup a connector that will look for changes to things like database or flatfile and automatically pull those changes in**
* Start zookeeper and kafka-server (broker)
* In place of producer invoke **connect-standalone.bat**
  * pass the 3 properties files conenct-[standalone / file-source / file-sink].properties
  * standalone property file defines the bootstrapserver.
  * file-source and file-sink properties files specify input and output file names respectively and also a shared topic name between source (input) and sink(outout).
    * This will create a topic with the topic name defined in source (?) property file.
  * Now consumer can be invoked in standard way as usual using the topic name from source (?) file.
  * To test we can dynamically keep inserting data into the file (defined in soruce proeprties and the result will appear in the target file automatically.
<hr/>

#### Interesting links on Kafka conenctivity
* [Using Kafka from Spring Java application](https://www.baeldung.com/spring-kafka)
* [Kafka Command line options with example](https://medium.com/@TimvanBaarsen/apache-kafka-cli-commands-cheat-sheet-a6f06eac01b)
* We can use "--help" in each of the commands below to get the complete syntax help (except for zookeeper-server-start.bat)
* [The Commandline document](https://chinmay-anand.github.io/it-architecture/mynotes/kafka_essentials/) - compiled by Chinmay
* [Kafka Connector for Databases](https://www.confluent.io/blog/kafka-connect-deep-dive-jdbc-source-connector/) - JdbSourceConenctor from confluent
* For File based connector see the above block

<hr/>

#### Additional Kafka Courses for expertise
* Analyzing BigData with Hive
* Apache Spark Essential Training
* Data Engineering Essential Training for Data Science

<hr/>

#### Distribution and Packaging of Kafka
* Vendors supporting the distribution and packaging of kafka solutions:
  * **cloudera** -- charges price for their version of kafka but support with a lot of tools
  * **Hiortonworks** -- Open source, charge only if support is needed - NOW MERGED with Cloudera
  * **Amazon Kinesis** on AWS
  * ** Confluent Community version** is great to use.

<hr/>

### EXAMPLE CODE for above functionailty ###
```
#. Start Zookeeper
> zookeeper-server-start.bat %MY_KAFKA_HOME%\config\zookeeper.properties

#. Start Kafka Server (server aka broker needs zookeeper to be running at "zookeeper.connect")
> kafka-server-start.bat %MY_KAFKA_HOME%\config\server.properties

#. Run built-in script to create new topic named "test" with 1 partition on 1 node
> kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic test

#. See the topic
> kafka-topics.bat --list --zookeeper localhost:2181

#. Run the producer in terminal and enter some messages
> kafka-console-producer.bat --broker-list localhost:9092 --topic test
message 1
message 2
message 3

#. In a new terminal window read the messages
> kafka-console-consumer.bat --bootstrap-server localhost:9092 --topic test --from-beginning
message 1
message 2
message 3

#. If you go side-by-side with the terminal windows you can type in the producer
#. window and see the results appear in the consumer
#. This code is made for Unix-based systems such as Linux and Mac OSX
#. For Windows use bin\windows\ instead of , and change the script extension
#. to .bat

#. Create config files for each new broker
#. use 'copy' on Windows
> cp %MY_KAFKA_HOME%\config\server.properties %MY_KAFKA_HOME%\config\server-1.properties
> cp %MY_KAFKA_HOME%\config\server.properties %MY_KAFKA_HOME%\config\server-2.properties

#. Update the following properties in the new files
config/server-1.properties:
    broker.id=1
    listeners=PLAINTEXT://:9093
    log.dir=/tmp/kafka-logs-1

config/server-2.properties:
    broker.id=2
    listeners=PLAINTEXT://:9094
    log.dir=/tmp/kafka-logs-2

#. Start the two new nodes in separate termial windows
#. You should already have Zookeeper running
> kafka-server-start.bat %MY_KAFKA_HOME%\config\server-1.properties &
...
> kafka-server-start.bat %MY_KAFKA_HOME%\config\server-2.properties &
...

#. Create new topic replicated to all 3 nodes
> kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 3 --partitions 1 --topic my-replicated-topic

#. See stats about our new topic
> kafka-topics.bat --describe --zookeeper localhost:2181 --topic my-replicated-topic
Topic:my-replicated-topic	PartitionCount:1	ReplicationFactor:3	Configs:
	Topic: my-replicated-topic	Partition: 0	Leader: 1	Replicas: 1,2,0	Isr: 1,2,0

#. Compare this to our 'test' topic
> kafka-topics.bat --describe --zookeeper localhost:2181 --topic test
Topic:test	PartitionCount:1	ReplicationFactor:1	Configs:
	Topic: test	Partition: 0	Leader: 0	Replicas: 0	Isr: 0

#. Send some messages to our replicated topic, then kill the producer
> kafka-console-producer.bat --broker-list localhost:9092 --topic my-replicated-topic
...
my test message 1
my test message 2
^C

#. Read messages from topic
> kafka-console-consumer.bat --bootstrap-server localhost:9092 --from-beginning --topic my-replicated-topic
...
my test message 1
my test message 2
^C

#. Now kill Broker 1
> ps aux | grep server-1.properties
7564 ttys002    0:15.91 /System/Library/Frameworks/JavaVM.framework/Versions/1.8/Home/java...
> kill -9 7564

#. For Windows use:
> wmic process get processid,caption,commandline | find "java.exe" | find "server-1.properties"
java.exe    java  -Xmx1G -Xms1G -server -XX:+UseG1GC ... build\libs\kafka_2.10-0.10.1.0.jar"  kafka.Kafka config\server-1.properties    644
> taskkill /pid 644 /f

#. Check which node is the leader for our topic now
> kafka-topics.bat --describe --zookeeper localhost:2181 --topic my-replicated-topic

#. Try reading the messages again
> kafka-console-consumer.bat --bootstrap-server localhost:9092 --from-beginning --topic my-replicated-topic
...
my test message 1
my test message 2
^C
#. This code is made for Unix-based systems such as Linux and Mac OSX
#. For Windows use bin\windows\ instead of , and change the script extension
#. to .bat

#. Create a simple text file to work with that has 2 lines
> echo -e "foo\nbar" > test.txt

#. Setup connector in standalone mode
#. pass in connection properties config
#. then file connection config
#. then file sync config (serialization)
#. all configs here ship w/ Kafka and act as templates
> connect-standalone.bat %MY_KAFKA_HOME%\config\connect-standalone.properties %MY_KAFKA_HOME%\config\connect-file-source.properties %MY_KAFKA_HOME%\config\connect-file-sink.properties

#. Once the above connector starts running, it will read test.txt
#. and write to test.sink.txt
#. We can see this by reading the contents of the file
> cat test.sink.txt
foo
bar

#. To see the data in the consumer run the following
> kafka-console-consumer.bat --bootstrap-server localhost:9092 --topic connect-test --from-beginning

#. In a separate terminal window, add some lines to the file
echo "Another line" >> test.txt
#. This code is made for Unix-based systems such as Linux and Mac OSX
#. For Windows use bin\windows\ instead of , and change the script extension
#. to .bat

#. Run built-in WordCount algorithm on data stream
#. This demo application behaves slightly differently because it is designed to
#. operate on an infinite, unbounded stream of data instead of a bound file

#. Create some data in a file
> echo -e "all streams lead to kafka\nhello kafka streams\njoin kafka summit" > file-input.txt

#. OR on Windows
> echo all streams lead to kafka> file-input.txt
> echo hello kafka streams>> file-input.txt
> echo|set /p=join kafka summit>> file-input.txt

#. Send data to new topic
> kafka-topics.bat --create \
            --zookeeper localhost:2181 \
            --replication-factor 1 \
            --partitions 1 \
            --topic streams-file-input

#. Send data to the topic
> kafka-console-producer.bat --broker-list localhost:9092 --topic streams-file-input < file-input.txt

#. Run WordCount application, this will terminate after a few seconds
> kafka-run-class.bat org.apache.kafka.streams.examples.wordcount.WordCountDemo

#. Inspect the output by reading from the topic where the data was written
#. Use the built-in String and Long deserializers
> kafka-console-consumer.bat --bootstrap-server localhost:9092 \
            --topic streams-wordcount-output \
            --from-beginning \
            --formatter kafka.tools.DefaultMessageFormatter \
            --property print.key=true \
            --property print.value=true \
            --property key.deserializer=org.apache.kafka.common.serialization.StringDeserializer \
            --property value.deserializer=org.apache.kafka.common.serialization.LongDeserializer

#. Output should look like the following
all     1
lead    1
to      1
hello   1
streams 2
join    1
kafka   3
summit  1
```