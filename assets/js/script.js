app = angular.module('b1', []);
app.controller("hienthi", xuly);
function xuly($scope) {
    $scope.hoten = 'Tran Phu Dat';
    $scope.ngaysinh = '14/3/2003';
    $scope.gender = 'Male';
    $scope.photo = 'avatar.jpg';
    $scope.mark = 8.5;
    $scope.handle = () => {
        var d = parseFloat($scope.dai);
        var r = parseFloat($scope.rong);
        $scope.chuvi = (d + r) * 2;
        $scope.dientich = (d * r);
    }
    $scope.inProduct = () => {
        $scope.trueForm = '';
        var checking = true;
        if ($scope.frm.tensp.$invalid) {
            checking = false;
        } else if ($scope.frm.soluong.$invalid) {
            checking = false;
        } else if ($scope.nsx == undefined || $scope.nsx == 0) {
            checking = false;
        } else if ($scope.tinhtrang == undefined) {
            checking = false;
        } else if ($scope.red == undefined && $scope.black == undefined && $scope.white == undefined) {
            checking = false;
        }
        if (checking == true) {
            $scope.trueForm = 'Nhập thành công'
        }
        return (checking);
    }
}

