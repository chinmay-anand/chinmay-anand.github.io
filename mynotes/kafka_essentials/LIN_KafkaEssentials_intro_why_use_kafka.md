# Why Use Kafka
## Efficiency and implication

**Efficiency** gain due to Kafka
* **Central repository**
  * Using Kafka we have a central repository for all the different entities and streams of data in your enterprise (different systems like Espresso, Voldemort, Oracle etc..) have different APIs, and with different messaging protocols).
    * So all of the data that is being written to Kafka, then anyone else that is reading it all comes and goes from this same central point.
    * Anytime the data is read and then processed again, those changes will also need to be written back so you have a single source of truth for that entity specifically inside of Kafka.
    * So no longer do you have to make API calls to third party systems and wait for that return in order to do your job.
* **Fast Writing**
  * You can just write directly to Kafka, and Kafka's built in nature is that it does this write operation very quickly so you can continue on with whatever you next task may be.
  * The source of truth lives within Kafka in the log and finding he data will be quicker.
* **Historical Tracking**
  * Who made what change and when that change was made, all of those things will be logged inside of your Kafka cluster instead of in varying formats between the different apps and systems.
* **Bootstrapping new applications**
  * To set up that new app, you can basically get all the different data (that are existing on different systems) directly from Kafka. Now, if you have multiple topics, or entities, as they're called, you can pull all the latest copies from those topics directly, or you can take the latest snapshot and then apply whatever changes were necessary to get you up to speed. Now, this is really beautiful because you no longer have to know where those different elements live.
  * Product development cycle may be slowed down if Kafka is not adopted.
* **EXAMPLE:** Kafka cluster can collect realtime data from multiple interfaces like Sensor arrays, PoS systems, Websites, Mogile apps, Social media etc and that data after operating on can be integrated with other systems like Databases, Reporing systems, Log systems, Data Lake, Data Warehouse etc.

**Implications** or Impact of adopting Kafka
* **Retooling**
  * To use Kafka we need to do retooling.
* **Changing App Architecture**
  * Some legacy and 3rd party systems are difficult to change and for those we need to build a middle layer to interface between the Kafka cluster and the 3rd party external  API.
* **Whole-scale investment**
  * For every new implementation we may need to invest in training and setting aside some time for learning and implemnetating it. Else it will not have enterprise wide benefit, just benefitting few small groups.
  * Curent working architecture may need to be changed. But once implemented we will have a lot more capacity to move quickly.
  * So when you look at using Kafka, think of it as an enterprise class solution.
  * *"you have to slow down to speed up sometimes."*
* **New platform to maintain**
  * Once transitioned we will need - maintenance, hiring new people, buying few things(hardware, maintenance contract, supprot contract etc)
