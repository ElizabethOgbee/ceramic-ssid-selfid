Change #1:
Old val: 3ID's
New val: 3IDs
Reason : Appropriate analogy would be student's vs students or students' vs students - First in both cases would imply something that is or pertains directly to the subject unlike the usage of 3IDs in our case.

Change #2:
Old val: Ceramic-Tutorial
New val: ceramic-tutorial
Reason: 
$ npx create-next-app@latest Ceramic-Tutorial
npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead.
Could not create a project called "Ceramic-Tutorial" because of npm naming restrictions:
    * name can no longer contain capital letters
 main (#4)
@Hachiman2284
Hachiman2284 committed on Jul 5 
1 parent b0cb799 commit 1e2b5b432ec7cd0a93fd8b1ffad98f0cab4254a0
Showing 1 changed file with 9 additions and 9 deletions.
  18  
README.md
@@ -80,18 +80,18 @@ At the lowest level, there is a decentralized identity. The most common approach

A user can link multiple wallets from multiple chains to a single 3ID. Currently, Ceramic supports more than 10 blockchains, and is continually adding support for more.

3ID's can own data on Ceramic Network. Data on Ceramic is referred to as **Streams**. Each stream therefore has an owner (or multiple owners).
3IDs can own data on Ceramic Network. Data on Ceramic is referred to as **Streams**. Each stream therefore has an owner (or multiple owners).

Streams have unique **StreamID**'s, which remain the same over the lifetime of the stream. 3ID's can modify and update the contents of a Stream that they have ownership on.
Streams have unique **StreamID**s, which remain the same over the lifetime of the stream. 3IDs can modify and update the contents of a Stream that they have ownership on.

Streams have a **genesis** state, which is the initial data the Stream was created with. Following the genesis state, users can create **commits** on Streams, which represent modifications to the data. The latest state of a Stream can be computed by starting from the genesis state and applying all the commits one by one. The latest state is also referred to as the **tip** of a stream.

## Using Ceramic
Ceramic provides a suite of high-level and low-level libraries and SDK's to work with, depending on the use case.

For common use cases, developers can use the high-level SDK - Self.ID - which abstracts away most of the complexities of working with 3ID's and Streams.
For common use cases, developers can use the high-level SDK - Self.ID - which abstracts away most of the complexities of working with 3IDs and Streams.

For complex or customized use cases, developers can work with a lower-level Ceramic HTTP Client, which connects to a Ceramic node they can run on their own (or the public nodes), and manage 3ID's and Stream data manually.
For complex or customized use cases, developers can work with a lower-level Ceramic HTTP Client, which connects to a Ceramic node they can run on their own (or the public nodes), and manage 3IDs and Stream data manually.

For the purposes of this tutorial, we will stick with the Self.ID high-level SDK, as otherwise this tutorial will become extremely large. If you're interested in digging deeper, do check out the *Recommended Resources* section below.

@@ -106,20 +106,20 @@ We will create a simple Next.js application, which uses Self.ID. It will allow u

For verification of this level, we will ask you to enter your profile's StreamID at the end.

- Let's get started by creating a new `next` app. Run the following command to create a new Next.js application inside a folder named `Ceramic-Tutorial`
- Let's get started by creating a new `next` app. Run the following command to create a new Next.js application inside a folder named `ceramic-tutorial`
    ```bash
    npx create-next-app@latest Ceramic-Tutorial
    npx create-next-app@latest ceramic-tutorial
    ```
    and press `Enter` for all the question prompts. This should create the `Ceramic-Tutorial` folder and setup the `next` app inside it. It will also initialize a git repository you can push to GitHub after making changes.
- Let's now install the Self.ID npm packages, and a dependent library, to get started. From inside the `Ceramic-Tutorial` folder, run the following in your terminal
    and press `Enter` for all the question prompts. This should create the `ceramic-tutorial` folder and setup the `next` app inside it. It will also initialize a git repository you can push to GitHub after making changes.
- Let's now install the Self.ID npm packages, and a dependent library, to get started. From inside the `ceramic-tutorial` folder, run the following in your terminal
    ```bash
    npm install @self.id/react @self.id/web key-did-provider-ed25519
    ```
- Let's also install the `ethers` and `web3modal` packages that we will be using to support wallet connections
    ```bash
    npm install ethers web3modal
    ```
- Open up the `Ceramic-Tutorial` folder in your text editor of choice, and let's get to coding.
- Open up the `ceramic-tutorial` folder in your text editor of choice, and let's get to coding.
- The first thing we need to do is add Self.ID's Provider to the application. The SDK exposes a `Provider` component that needs to be added to the root of your web app. This initiatalizes the Self.ID instance, connects to the Ceramic Network, and makes Ceramic-related functionality available all across your app.
- To do this, note in your `pages` folder Next.js automatically created a file called `_app.js`. This is the root of your web-app, and all other pages you create are rendered according to the configuration present in this file. By default, it does nothing special, and just renders your page directly. In our case, we want to wrap every component of ours with the Self.ID provider.
- First, let's import the `Provider` from Self.ID. Add the following line at the top of `_app.js`
