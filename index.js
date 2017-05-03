function sendListOfChoices(recipientId) {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: "حدد الاختيار متاعك",
      quick_replies: [
        {
          "content_type":"text",
          "title":"الخدمات الخديدة",
          "payload":"service"
        },
	{
          "content_type":"text",
          "title":"عروض الانترنات 📝",
          "payload":"internet"
        },
	{
          "content_type":"text",
          "title":"اقرب بوتيك 🔭",
          "payload":"boutique"
        },
        {
          "content_type":"text",
          "title":"مرشد الحرفاء 👧👦",
          "payload":"guide"
        }
        
      ]
    }
  };

  callSendAPI(messageData);
}
