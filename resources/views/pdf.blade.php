<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge" </head>
    <style>
        table {
            font-family: arial, sans-serif;
            border-collapse: collapse;
            width: 100%;
        }

        td,
        th {
            border: 1px solid #dddddd;
            text-align: left;
            font-size: 14px;
            padding: 8px;
        }

        tr:nth-child(even) {
            background-color: #dddddd;
        }

    </style>

<body>
    <span style="color:#0088cc">Gracefields</span>
    <div>
        <span style="font-size:24px">Visitors Monthly Report</span>
        <span style="float:right; font-size:22px;">{{ ucwords($month) }} {{ $year }}</span>
    </div>
    <hr style="border: 3px solid #0088cc;">
    <p> Visitors summary for the end of the month may</p>
    <div>
        <p style="border-bottom: 1px dashed #ccc;">
            <span style="font-weight:500;">Total Visitors</span>
            <span style="float:right;">{{ $total_visitors }}</span>
        </p>
        <p style="border-bottom: 1px dashed #ccc;">
            <span style="font-weight:500">Total Assigned</span>
            <span style="float:right;">{{ $total_assigned }}</span>
        </p>
        <p style="border-bottom: 1px dashed #ccc;">
            <span style="font-weight:500">Total Unassigned</span>
            <span style="float:right;">{{ $total_unassigned }}</span>
        </p>
    </div>
    <hr style="border: 3px solid #0088cc;">
    <p>Channels through which visitors heard of the church or visited the church</p>
    <div>
        <p style="border-bottom: 1px dashed #ccc;">
            <span style="font-weight:500;">Radio</span>
            <span style="float:right;">{{ $radio }}</span>
        </p>
        <p style="border-bottom: 1px dashed #ccc;">
            <span style="font-weight:500">Social Media</span>
            <span style="float:right;">{{ $social_media }}</span>
        </p>
        <p style="border-bottom: 1px dashed #ccc;">
            <span style="font-weight:500">Invited</span>
            <span style="float:right;">{{ $invited }}</span>
        </p>
    </div>
    <hr style="border: 3px solid #0088cc;">
    <p>Visitors membership status after visit to church.</p>
    <div>
        <p style="border-bottom: 1px dashed #ccc;">
            <span style="font-weight:500;">Yes</span>
            <span style="float:right;">{{ $membership_yes }}</span>
        </p>
        <p style="border-bottom: 1px dashed #ccc;">
            <span style="font-weight:500">No</span>
            <span style="float:right;">{{ $membership_no }}</span>
        </p>
        <p style="border-bottom: 1px dashed #ccc;">
            <span style="font-weight:500">Not decided</span>
            <span style="float:right;">{{ $membership_not_decided }}</span>
        </p>
    </div>
    <hr style="border: 3px solid #0088cc;">
    <p>Visitors Assitance request
    </p>
    <div>
        <p style="border-bottom: 1px dashed #ccc;">
            <span style="font-weight:500;">Becoming Born Again</span>
            <span style="float:right;">{{ $becoming_born_again }}</span>
        </p>
        <p style="border-bottom: 1px dashed #ccc;">
            <span style="font-weight:500">Joining Bible Studies</span>
            <span style="float:right;">{{ $joining_bible_studies }}</span>
        </p>
        <p style="border-bottom: 1px dashed #ccc;">
            <span style="font-weight:500">Others</span>
            <span style="float:right;">{{ $others }}</span>
        </p>
    </div>
    <hr style="border: 3px solid #0088cc;">
    <p>Visitors age distribution
    </p>
    <div>
        <p style="border-bottom: 1px dashed #ccc;">
            <span style="font-weight:500;">21-34 yrs</span>
            <span style="float:right;">{{ $btn_21_34 }}</span>
        </p>
        <p style="border-bottom: 1px dashed #ccc;">
            <span style="font-weight:500">Below 20 yrs</span>
            <span style="float:right;">{{ $below_20_yrs }}</span>
        </p>
        <p style="border-bottom: 1px dashed #ccc;">
            <span style="font-weight:500">35-44 yrs</span>
            <span style="float:right;">{{ $above_35 }}</span>
        </p>
    </div>
    <hr style="border: 3px solid #0088cc;">
    <h1>Visitors List</h1>
    <table>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Assignee</th>
            <th>Status</th>
            <th>Visited At</th>
        </tr>
        @foreach ($visitors as $visitor)
            <tr>
                <td>{{ $visitor->fullname }}</td>
                <td>{{ $visitor->email}}</td>
                <td>{{ $visitor->phone}}</td>
                <td>{{ $visitor->user()->name}}</td>
                <td>{{ $visitor->state}}</td>
                <td>{{ $visitor->visited_at}}</td>
            </tr>
        @endforeach

    </table>

</body>

</html>
