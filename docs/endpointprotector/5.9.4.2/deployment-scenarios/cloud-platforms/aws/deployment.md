# Launching the EC2 Image

As the Endpoint Protector image has already been shared with you, this process is similar to any
other EC2 launch.

Follow the steps to launch the EC2 image.

**Step 1 –** Go to Services: EC2 and select your region.

**Step 2 –** Go to Images: AMIs and select the type of the Private image and search for Endpoint
Protector.

![Launching AMISs](/img/product_docs/endpointprotector/endpointprotector/configuration/amazonwebservices/imagesamis.webp)

**Step 3 –** Right-click and select **Launch Instance from AMI**.

![Launching Private Image](/img/product_docs/endpointprotector/endpointprotector/configuration/amazonwebservices/privateimage.webp)

**Step 4 –** Enter the Name and Create tags as per your policies.

**Step 5 –** Select an Instance Type.

**NOTE:** For assistance in selecting the instance type that best suits your needs, customers should
submit a support ticket through the
[Netwrix Customer Portal](https://www.netwrix.com/sign_in.html?rf=my_products.html).

**Step 6 –** Select an available key pair or create a new key pair.

If you choose to use a key pair, you may need to share it with our Support Team for certain support
requests. Ensure that the key pair is used exclusively for this instance to maintain security. We
recommend selecting **Proceed without a Key Pair** and then clicking **Launch Instances**.

![Launching AMI instances ](/img/product_docs/endpointprotector/endpointprotector/configuration/amazonwebservices/launchinstance.webp)

**Step 7 –** Configure the Network section.

![Configuring the Network section](/img/product_docs/endpointprotector/endpointprotector/configuration/amazonwebservices/networksettings.webp)

**Step 8 –** Edit Network Section and provide the following information:

- Select a VPC and a Subnet
- Enable the Auto-assign public IP
- Select Create security group and then provide a name and description
- Remove the existing Inbound rules
- Add two new Inbound security group rules:

  - Type HTTPS, Protocol TCP, Port range 443, Source type Custom, Source 0.0.0.0/0 (mandatory)
  - Type HTTP, Protocol TCP, Port range 80, Source type Custom, Source 0.0.0.0/0 (optional)

![Editing the Network Section ](/img/versioned_docs/changetracker_8.0/changetracker/admin/settings/policytemplates/editnetwork.webp)

**Step 9 –** The Storage section does not require any changes.

![Configuring the storage section](/img/product_docs/endpointprotector/endpointprotector/configuration/amazonwebservices/configurestorage.webp)

**Step 10 –** On the Summary section click **Launch Instance**.

![Summary section ](/img/product_docs/accessanalyzer/11.6/admin/datacollector/adinventory/summary.webp)

**Step 11 –** Wait for the instance to start; this might take a few minutes while the Status Checks
appear as Initializing.

![Initiating Instance](/img/product_docs/endpointprotector/endpointprotector/configuration/amazonwebservices/instancestarting.webp)
