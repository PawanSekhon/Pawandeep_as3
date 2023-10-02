function getTeamDataUsingJSON() {
    $.getJSON('team.json', function(data) {
      $.each(data.team, function(index, member) {
        var $teamDiv = $('#team');
        var $memberDiv = $('<div>');
        var $nameHeader = $('<h2>').text(member.name);
        var $positionHeader = $('<h5>').text(member.position);
        var $bioParagraph = $('<p>').text(member.bio);
        
        $memberDiv.append($nameHeader, $positionHeader, $bioParagraph);
        $teamDiv.append($memberDiv);
      });
    });
  }
  
  
  
  function getTeamDataUsingAjax() {
    var $teamDiv = $('#team');
    $teamDiv.text('Loading...'); // Display "Loading..." while fetching data
  
    $.ajax({
      url: 'team.json',
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        setTimeout(function() {
          $teamDiv.empty(); // Clear the "Loading..." message
          $.each(data.team, function(index, member) {
            var $memberDiv = $('<div>');
            var $nameHeader = $('<h2>').text(member.name);
            var $positionHeader = $('<h5>').text(member.position);
            var $bioParagraph = $('<p>').text(member.bio);
            $memberDiv.append($nameHeader, $positionHeader, $bioParagraph);
            $teamDiv.append($memberDiv);
          });
        }, 3000); // Delay for 3 seconds before displaying content
      },
      error: function(xhr, status, error) {
        $teamDiv.text('Error: Content could not be retrieved.'); // Display error message
        console.error('Error loading team data:', error);
      }
    });
  }
  
  $(document).ready(function() {
    getTeamDataUsingAjax(); // Call the method to fetch and display team data
  });  