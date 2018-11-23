# Modal

A component that displays content in a layer blocking the interaction with the page.

{{#docs-demo as |demo|}}
  {{#demo.example name="modal-example.hbs"}}
    <Button onclick={{action this.showModal}}>
      Show Modal
    </Button>

    <Button onclick={{action this.showSmallModal}}>
      Show Small Modal
    </Button>

    <Button onclick={{action this.showLargeModal}}>
      Show Large Modal
    </Button>

    {{#if isModalVisible}}
      <Modal 
        @small={{this.isSmall}} 
        @large={{this.isLarge}} 
        @onClose={{action (mut this.isModalVisible) false}}
      as |m|>
        <m.header>Last Day of Magic</m.header>

        <m.body>
          <p>Our galaxy, the Milky Way, is one of 50 or 100 billion other galaxies in the universe. And with every step, every window that modern astrophysics has opened to our mind, the person who wants to feel like they're the center of everything ends up shrinking.</p>
          <p>Some asteroids have us in their sights. Be nice to sort of go near them and find out what they're made of, possibly tag their ears so they're always broadcasting to us their location. In case one of their trajectories head straight for us, we'll know well in advance to do something about it.</p>
          <p>Pluto's orbit is so elongated that it crosses the orbit of another planet. Now that's... you've got no business doing that if you want to call yourself a planet. Come on, now! There's something especially transgressive about that.</p>
        </m.body>

        <m.footer>
          <Button @primary>Save</Button>
          <Button onclick={{action m.actions.close}}>Cancel</Button>
        </m.footer>
      </Modal>
    {{/if}}
  {{/demo.example}}

  {{demo.snippet "modal-example.hbs"}}
  {{demo.snippet "modal-example.ts"}}
{{/docs-demo}}
