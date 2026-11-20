# Assignment 1

You will only need one file, ie, your node module, for this assignment.

In this readme file, describe how to use your node module. It could be similar to **app.js** from Lab2, where you call some functions in your node module and display the output. Describe how to setup your node module, if any. Describe how to call the functions, what parameters required and so on.

You can press **Ctrl+Shift+V** in this file in Visual Studio Code to see a live preview of the readme file.

For some tips in formatting text in readme file, refer to https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax

# References
Provide the references that you have used to support your assignment. 

Youtube (Entertainment industry): https://www.youtube.com/

AI has been used to generate ideas for the application: https://chatgpt.com/share/6af818c2-f93c-83ec-ab9e-c7e331450787

## Mock Database
Database Name:

    Video 

Video table:

    let video = [
        video1 = {
            videoID: 1,
            title: 'Python Tutorial for beginners',
            description: 'Full course for Python',
            channelName: 'Pro-Programmer',
            uploadDate: 2015-10-10,
        },

        video2 = {
            videoID: 2,
            title: 'Java Tutorial for beginners',
            description: 'Full course for Java',
            channelName: 'Pro-Programmer',
            uploadDate: 2019-10-10",
        },

        video3 = {
            videoID: 3,
            title: 'Study music for 2 hours',
            description: 'Keep focused with this study music and use it to concentrate.',
            channelName: 'Study music',
            uploadDate: "2022-10-10",
        }]

Video details table:

    let videoDetails = [

        videoDetails1 = {
            videoID: 1,
            Resolution: "144p",
            FrameRate: 24,
            Codec: "H.264",
        },

        videoDetails3 = {
            videoID: 1,
            Resolution: "720p",
            FrameRate: 60,
            Codec: "AV1",
        }]

## Function 1: Upload video

Example 1:

    video.uploadVideo(4, "Calm study music for 4 hours", "Best music to study", "Music", new Date(), "1080p", 30, "AV2")

Expected output: 
>Calm study music for 4 hours has been added to the system successfully


## Function 2 : Update video

Example 1:

    video.updateVideo(videoID: 1, {title: '2026 Python Tutorial for beginners', description: 'Full course for Python 2026'})

Expected output:
>Video has been updated successfully


## Function 3: Delete video

Example 1:

    Video.deleteVideo(1)

Expected output: 
>Video and video details are deleted successfully

Example 2:

    Video.deleteVideo(2)

Expected output: 
>Video has been deleted successfully. <br>No record of video details is found.


## Function 4: Search for the channel's video

Example 1:

    video.getVideoByChannelName(channelName: 'Study music')

Expected output: 
>   "message": {<br>
    &emsp;videoID: 3,<br>
    &emsp;title: 'Study music for 2 hours',<br>
    &emsp;description: 'Keep focused with this study music and use it to concentrate.',<br>
    &emsp;channelName: 'Study music',<br>
    &emsp;uploadDate: 2022-10-10,<br>
    }

## Function 5: Sort video

Example 1:

    video.sortVideoByDate(new Date(Math.max(...video.map(a => a.uploadDate))), new Date(Math.min(...video.map(a => a.uploadDate))))

Expected output:
>   video3 = { <br>
    &emsp;videoID: 3,<br>
    &emsp;title: 'Study music for 2 hours',<br>
    &emsp;description: 'Keep focused with this study music and use it to concentrate.',<br>
    &emsp;channelName: 'Study music',<br>
    &emsp;uploadDate: "2022-10-10",<br>
    }<br>
    video2 = {<br>
    &emsp;videoID: 2,<br>
    &emsp;title: 'Java Tutorial for beginners',<br>
    &emsp;description: 'Full course for Java',<br>
    &emsp;channelName: 'Pro-Programmer',<br>
    &emsp;uploadDate: 2019-10-10",<br>
    },<br>
    video1 = {<br>
    &emsp;videoID: 1,<br>
    &emsp;title: 'Python Tutorial for beginners',<br>
    &emsp;description: 'Full course for Python',<br>
    &emsp;channelName: 'Pro-Programmer',<br>
    &emsp;uploadDate: 2015-10-10,<br>
    },
