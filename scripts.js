<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>

<script>
  
  $(document).ready(function(){
  
$('a').attr('target','_blank');
  
// force PDF Files to open in new window
    $('a[href$=".pdf"]').attr('target', '_blank');
  });
  
</script>
