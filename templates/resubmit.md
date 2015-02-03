Greetings @<%= user.login %>!

My sensors indicate that you need to update your issue through our [custom issue form](http://ionicframework.com/submit-issue/#/?iid=<%= issue.number %>). We are now requiring all issues to be submitted this way, to ensure that we have all of the information necessary to fix them as quickly as possible.

**[Click Here To Update Your Issue](http://ionicframework.com/submit-issue/#/?iid=<%= issue.number %>)**

I will have no choice but to close this issue if it is not resubmitted through the form. Please fill out the rest of the form, so that I may use my friendly robot powers to assist you.

Thank you!

<span ionic-issue-resubmit></span>
