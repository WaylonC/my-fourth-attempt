<script>
  import Scrolly from "./Scrolly.svelte";

  import { tweened } from "svelte/motion";

  //import { PymChild } from "pym";




  let number = tweened(0);

  let currentStep;

  $: if (currentStep == 0) {
    number.set(100);
  } else if (currentStep == 1) {
    number.set(200);
  } else if (currentStep == 2) {
    number.set(300);
  }  

</script>







<section>
  <Scrolly bind:value={currentStep}>

    <div class='sticky'>{Math.round($number)}</div>
  
  </Scrolly> 


</section>

<style>
	
	.sticky {
		position:sticky;
		bottom:0;
		left:0;
	}



</style>